import { useEffect, useState } from 'react'
import { Camera, X, Check, Phone, ArrowRight, Lock, RotateCcw } from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { PHONE_DISPLAY, PHONE_TEL, formatPhone } from '../data/site.js'
import './photo-diagnosis.css'

export default function PhotoDiagnosis() {
  const pd = usePhotoDiagnosis()
  const [open, setOpen] = useState(false)

  /* Adding a photo on mobile opens the rest of the form — the compact initial
     state exists to protect the fold, not to hide the form. */
  useEffect(() => { if (pd.preview) setOpen(true) }, [pd.preview])

  const done = pd.status === 'done'

  return (
    <div className="pd" data-state={pd.status}>
      <span className="pd__edge" aria-hidden="true" />

      {!done && (
        <form className="pd__form" onSubmit={pd.submit} noValidate>
          <div className="pd__head">
            <p className="eyebrow eyebrow--plain pd__kicker">Photo Diagnosis</p>
            <h2 className="pd__title">Send Us A Photo Of The Problem</h2>
            <p className="pd__lede">
              Send a photo of the panel, fixture, or fault. An electrician reviews it and
              calls you back with a plain answer.
            </p>
          </div>

          {/* Drop target — the widget's centrepiece */}
          <div
            className="pd__drop"
            data-dragging={pd.dragging ? 'true' : 'false'}
            data-has-photo={pd.preview ? 'true' : 'false'}
            {...pd.dropProps}
          >
            <span className="pd__tick pd__tick--tl" aria-hidden="true" />
            <span className="pd__tick pd__tick--tr" aria-hidden="true" />
            <span className="pd__tick pd__tick--bl" aria-hidden="true" />
            <span className="pd__tick pd__tick--br" aria-hidden="true" />

            {pd.preview ? (
              <>
                <img className="pd__preview" src={pd.preview} alt="The photo you selected, ready to send" />
                <div className="pd__preview-bar">
                  <span className="pd__filename">{pd.file?.name}</span>
                  <button type="button" className="pd__clear" onClick={pd.clearPhoto}>
                    <X className="lucide" aria-hidden="true" />
                    <span>Remove</span>
                  </button>
                </div>
              </>
            ) : (
              <button type="button" className="pd__dropbtn" onClick={pd.openPicker}>
                <Camera className="lucide pd__dropicon" aria-hidden="true" />
                <span className="pd__dropline">Add A Photo</span>
                <span className="pd__drophint pd__drophint--long">Drag one in, or take one on your phone. JPG, PNG or HEIC up to 10MB.</span>
                <span className="pd__drophint pd__drophint--short">JPG, PNG or HEIC up to 10MB</span>
              </button>
            )}

            <input
              ref={pd.inputRef}
              className="sr-only"
              type="file"
              accept={pd.accepted}
              onChange={pd.onFileInput}
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>
          {pd.errors.file && <p className="pd__err pd__err--file">{pd.errors.file}</p>}

          <button
            type="button"
            className="btn btn--ghost btn--block pd__expand"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="pd-fields"
          >
            <span>Add Your Details</span>
            <ArrowRight className="lucide" aria-hidden="true" />
          </button>

          <div className="pd__fields" id="pd-fields" data-open={open ? 'true' : 'false'}>
            <div className="pd__field">
              <label className="pd__label" htmlFor="pd-desc">What Is Going On</label>
              <textarea
                id="pd-desc"
                className="pd__input pd__input--area"
                rows={2}
                placeholder="Breaker trips whenever the shop compressor starts"
                value={pd.fields.description}
                onChange={pd.setField('description')}
                aria-invalid={pd.errors.description ? 'true' : undefined}
              />
              {pd.errors.description && <p className="pd__err">{pd.errors.description}</p>}
            </div>

            <div className="pd__row">
              <div className="pd__field">
                <label className="pd__label" htmlFor="pd-name">Name</label>
                <input
                  id="pd-name"
                  className="pd__input"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={pd.fields.name}
                  onChange={pd.setField('name')}
                  aria-invalid={pd.errors.name ? 'true' : undefined}
                />
                {pd.errors.name && <p className="pd__err">{pd.errors.name}</p>}
              </div>
              <div className="pd__field">
                <label className="pd__label" htmlFor="pd-phone">Phone</label>
                <input
                  id="pd-phone"
                  className="pd__input"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(403) 000-0000"
                  value={pd.fields.phone}
                  onChange={pd.setField('phone')}
                  aria-invalid={pd.errors.phone ? 'true' : undefined}
                />
                {pd.errors.phone && <p className="pd__err">{pd.errors.phone}</p>}
              </div>
            </div>

            <button type="submit" className="btn btn--primary btn--block pd__submit">
              <span>{pd.status === 'sending' ? 'Sending' : 'Send For Review'}</span>
              <ArrowRight className="lucide" aria-hidden="true" />
            </button>
          </div>

          <p className="reassure pd__reassure">
            <Lock className="lucide" aria-hidden="true" />
            <span>
              No cost and no obligation. Your details are used to prepare your estimate
              and are not shared with anyone else.
            </span>
          </p>
        </form>
      )}

      {done && (
        <div className="pd__done" role="status">
          <span className="pd__check" aria-hidden="true">
            <svg viewBox="0 0 44 44" focusable="false">
              <circle cx="22" cy="22" r="21" className="pd__check-ring" />
              <path d="M13 22.5 L19.5 29 L31 17" className="pd__check-tick" />
            </svg>
          </span>
          <p className="eyebrow eyebrow--plain pd__kicker">Received</p>
          <h2 className="pd__title">Your Photo Is With Us</h2>
          <p className="pd__lede">
            Thanks {pd.fields.name.trim().split(' ')[0] || 'for that'} — an electrician
            reviews the photo and calls {formatPhone(pd.fields.phone)} with what we are looking at and
            what it takes to put it right.
          </p>

          {pd.preview && (
            <figure className="frame pd__thumb">
              <span className="photo pd__thumb-img">
                <img src={pd.preview} alt="The photo you sent for review" />
              </span>
              <figcaption>Sent for review</figcaption>
            </figure>
          )}

          <ol className="pd__next list-reset">
            <li><span>01</span> An electrician reviews the photo and your notes.</li>
            <li><span>02</span> We call you back with a scope and a written estimate.</li>
            <li><span>03</span> Nothing gets booked until you say the number works.</li>
          </ol>

          <div className="pd__done-actions">
            <a className="btn btn--primary" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <button type="button" className="btn btn--ghost" onClick={pd.reset}>
              <RotateCcw className="lucide" aria-hidden="true" />
              <span>Send Another</span>
            </button>
          </div>

          <p className="reassure pd__reassure">
            <Check className="lucide" aria-hidden="true" />
            <span>This is a demonstration form. Nothing was transmitted or stored.</span>
          </p>
        </div>
      )}
    </div>
  )
}
