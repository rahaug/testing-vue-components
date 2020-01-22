export const auth = {
    login(payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5
            ? resolve()
            : reject(new Error('something went wrong'))
        }, 1000)
      })
    }
}