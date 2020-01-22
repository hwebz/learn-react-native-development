import axios from 'axios';
  
export const getPhotos = () => {
    return (dispatch) => {
        axios.get('https://picsum.photos/v2/list?limit=100')
        .then(response => {
            dispatch({
                type: 'GET_PHOTOS',
                payload: [
                    ...response.data.map((d, index) => {
                        return {
                            id: d.id,
                            username: d.author,
                            user_avatar: `https://picsum.photos/id/${parseInt(Math.random()*1000, 10)}/200/300`,
                            image: d.download_url,
                            caption: `Don't know what to say #${index}`
                        }
                    })
                ]
            })
        })
        .catch(error => console.log(error))
    }
}