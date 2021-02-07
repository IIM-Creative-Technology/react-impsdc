import React, { Component } from 'react';
import "../scss/components/generic/toggle-component.scss";

const Toggle = ({checked, onChange}) => (

      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <label className="toggle-switch-label">
          <span className="toggle-switch-inner"/>
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );


export default Toggle