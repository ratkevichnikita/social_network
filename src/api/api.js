import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "c5105c19-734d-4b24-a561-f51323a81c78"
  }
})

export const usersAPI =  {
  getUsers(paginationCurrentPage = 1,paginationTotalCount = 20) {
    return instance.get(`users?page=${paginationCurrentPage}&count=${paginationTotalCount}`)
      .then(response => {
        return response.data
      })
  },

  follow(id) {
    return instance.post(`follow/${id}`, {}).then(response => {
      return response.data
    })
  },

  unFollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data
    })
  }
}

export const authAPI = {
  checkAuth() {
    return instance.get(`auth/me`)
  }
}

export const profileAPI =  {
  getUserProfile(userID) {
    return instance.get(`/profile/`+ userID )
  },
  getStatus(userID) {
    return instance.get(`profile/status/`+ userID)
  },
  updateStatus(userID) {
    return instance.put(`profile/status`)
  }
}