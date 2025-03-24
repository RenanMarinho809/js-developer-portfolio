
async function fetchProfileData() {
    const url = 'https://github.com/RenanMarinho809';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
