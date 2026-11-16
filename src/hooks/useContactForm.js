import { useState } from 'react'

function validate(fields) {
  const errors = {}
  if (!fields.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

export function useContactForm() {
  const [fields, setFields] = useState({ fullName: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (submitting) return
    const errs = validate(fields)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    setErrors({})
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...Object.fromEntries(
          Object.entries(fields).map(([name, value]) => [name, value.trim()])
        ) }).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
      setFields({ fullName: '', email: '', subject: '', message: '' })
    } catch {
      setErrors({ submit: 'Your message could not be sent. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  function reset() { setSubmitted(false); setErrors({}) }

  return { fields, errors, submitted, submitting, handleChange, handleSubmit, reset }
}
