import React from 'react';
import { createRoot } from 'react-dom/client';

const act = (href) => {
  if (href) window.location.href = 'byond://?' + href;
};

function Field({ field }) {
  if (!field.href) {
    return (
      <div className="row static">
        <span className="label">{field.label}</span>
        <span className="value muted">{field.value}</span>
      </div>
    );
  }
  return (
    <button className="row" onClick={() => act(field.href)}>
      <span className="label">{field.label}</span>
      <span className="value">
        {field.swatch && <i className="swatch" style={{ background: field.swatch }} />}
        {field.value}
      </span>
    </button>
  );
}

function Panel({ section }) {
  return (
    <section className="panel">
      <h2>{section.title}</h2>
      {section.fields.map((f, i) => (
        <Field key={i} field={f} />
      ))}
    </section>
  );
}

function App({ state }) {
  const left = state.sections.filter((s) => s.side === 'left');
  const right = state.sections.filter((s) => s.side === 'right');

  return (
    <div className="app">
      <header className="topbar">
        <div className="name">{state.name}</div>
        <div className="actions">
          {state.top.map((b, i) => (
            <button key={i} className="chip" onClick={() => act(b.href)}>
              {b.label}
            </button>
          ))}
        </div>
        <div className="readouts">
          {state.status.map((s, i) => (
            <button
              key={i}
              className="readout"
              onClick={() => act(s.href)}
              title={s.label}
            >
              <span className="rlabel">{s.label}</span>
              <span className="rvalue">{s.value}</span>
            </button>
          ))}
        </div>
      </header>

      <main className="cols">
        <div className="col">{left.map((s, i) => <Panel key={i} section={s} />)}</div>
        <div className="col">{right.map((s, i) => <Panel key={i} section={s} />)}</div>
      </main>

      <footer className="bottombar">
        {state.bottom.map((b, i) => (
          <button
            key={i}
            className={'btn ' + (b.style || '')}
            onClick={() => act(b.href)}
          >
            {b.label}
          </button>
        ))}
      </footer>
    </div>
  );
}

const state = window.__CHARUI__ || { sections: [], top: [], bottom: [], status: [], name: '' };
createRoot(document.getElementById('root')).render(<App state={state} />);
