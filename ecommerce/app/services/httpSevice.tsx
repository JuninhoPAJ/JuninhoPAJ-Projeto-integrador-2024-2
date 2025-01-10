const IP = "192.168.0.198"
const PORT = 3000
const HTTP_SERVER = `http://${IP}:${PORT}`

const service = {
    login: async (data: any) => {
        const RESOURCE_URL = `${HTTP_SERVER}/api/user/login`
        const response = await fetch(RESOURCE_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return response;
    }
}

export default service