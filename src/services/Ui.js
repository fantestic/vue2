import { ToastProgrammatic as Toast } from 'buefy'

export default {
  reportError (friendlyMessage, errorObject) {
    const icon = '<span class="icon is-small"><i class="mdi mdi-alert-circle"></i></span> '
    Toast.open({
      message: icon + this.escapeHtml(friendlyMessage),
      duration: 5000,
      type: 'is-danger'
    })
    if (errorObject) {
      console.error(errorObject)
    }
  },
  reportSuccess (friendlyMessage) {
    const icon = '<span class="icon is-small"><i class="mdi mdi-check-circle"></i></span> '
    Toast.open({
      message: icon + this.escapeHtml(friendlyMessage),
      duration: 5000,
      type: 'is-success'
    })
  },
  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}