const API_URL = "https://portfolioib-784910810f1a.herokuapp.com"
export const API_ROUTES = {
  SIGN_IN: `${API_URL}/api/auth/login`,
  WORKS: `${API_URL}/api/works`,
}

export const APP_ROUTES = {
  SIGN_IN: "/Connexion",
  ADD_WORK: "/Ajouter",
  WORK: "/Work/:id",
  UPDATE_WORK: "work/modifier/:id",
}
