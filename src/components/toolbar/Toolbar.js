import React from 'react'
import PropTypes from 'prop-types'
import {
  DebugIcon
} from '../icons'
import { LinkButton, SnapshotsButton, ToggleButton } from './buttons'

const Toolbar = ({
  theme = 'light',
  docType,
  docName,
  encodedKeys,
  onTakeSnapshot,
  onDebuggingStart,
  onDebuggingStop,
  isDebuggingEnabled,
  snapshots
}) => {
  const debugging =
    <div className='mb3'>
      <ToggleButton
        theme={theme}
        icon={DebugIcon}
        title='Enable / disable debugging'
        onClick={isDebuggingEnabled ? onDebuggingStop : onDebuggingStart}
        disabled={!isDebuggingEnabled} />
    </div>

  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-cloud-burst'} pt1`}>
      <div className='mb3'>
        <SnapshotsButton theme={theme} onTakeSnapshot={onTakeSnapshot} snapshots={snapshots} disabled />
      </div>
      <div className='mb3'>
        <LinkButton theme={theme} docType={docType} docName={docName} encodedKeys={encodedKeys} />
      </div>
      {false && debugging}
    </div>
  )
}

Toolbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  docType: PropTypes.oneOf(['markdown', 'richtext', 'math']).isRequired,
  docName: PropTypes.string.isRequired,
  encodedKeys: PropTypes.string.isRequired,
  onTakeSnapshot: PropTypes.func.isRequired,
  snapshots: PropTypes.array.isRequired,
  onDirectoryClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
  onShortcutsClick: PropTypes.func,
  onDebuggingStart: PropTypes.func.isRequired,
  onDebuggingStop: PropTypes.func.isRequired,
  isDebuggingEnabled: PropTypes.bool.isRequired
}

export default Toolbar
