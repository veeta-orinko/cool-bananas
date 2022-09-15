import { getDashboardContent } from '../apis/dashboard'

export const SET_DASHBOARD_CONTENT = 'SET_DASHBOARD_CONTENT'

export function setDashboardContent(DashboardContent) {
  console.log('i am DashboardContent', DashboardContent)
  return {
    type: SET_DASHBOARD_CONTENT,
    payload: DashboardContent,
  }
}
export function fetchDashboardContent() {
  return (dispatch) => {
    return getDashboardContent()
      .then((DashboardContent) => {
        dispatch(setDashboardContent(DashboardContent))
        return null
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
