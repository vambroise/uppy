/* global window, capabilities */

function selectFakeFile (uppyID, name, type, b64) {
  if (!b64) b64 = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTAiLz4KPC9zdmc+Cg=='

  var blob = new Blob(
    [`data:image/svg+xml;base64,${b64}`],
    { type: type || 'image/svg+xml' }
  )
  window[uppyID].addFile({
    source: 'test',
    name: name || 'test-file',
    type: blob.type,
    data: blob
  })
}

function supportsChooseFile () {
  // Webdriver for Safari and Edge doesn’t support .chooseFile
  return capabilities.browserName !== 'safari' &&
         capabilities.browserName !== 'MicrosoftEdge' &&
         capabilities.platformName !== 'Android'
}

module.exports = {
  selectFakeFile,
  supportsChooseFile
}
