import analytics from 'api/analytics.json';
const api = {
  fetchSurveyAnalytics: () => {
    return Promise.resolve(analytics);
  }
}
export default api;
