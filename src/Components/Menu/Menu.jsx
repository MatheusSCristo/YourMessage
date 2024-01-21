import React, { useEffect, useState, useSyncExternalStore } from 'react'
import * as S from "./stylesMenu"
import { onValue, ref, set } from 'firebase/database'
import { auth, database, storage } from '../../firebase/firebase'
import Friends from '../Friends/Friends'
import { uploadBytes, ref as refstorage, getDownloadURL, } from 'firebase/storage'
import Search from './Components/Search'


const Menu = () => {
    const [searchActive, setSearchActive] = useState(false)
    const [users, setUsers] = useState([])
    const [userLogged, setUserLogged] = useState()
    const [editActive, setEditActive] = useState(false)
    const [search, setSearch] = useState("")
    const [newname, setNewName] = useState()
    const [imageUpload, setImageUpload] = useState()
    const [imageURL, setImageURL] = useState()

    const GetUserLogin = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const id = user.uid
                const reference = ref(database, `users/${id}`)
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val()
                        setUserLogged(data)
                    }
                })
            }
        })
    }



    const ListUsers = () => {
        const reference = ref(database, "users")
        onValue(reference, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                setUsers(Object.values(data))
            }
        })
    }

    useEffect(() => {
        ListUsers()
        GetUserLogin()
        auth.onAuthStateChanged((user) => {
            if (user) {
                const imageRef = refstorage(storage, `images/${user.uid}`)
                getDownloadURL(imageRef)
                    .then((url) => setImageURL(url))
            }
        })
    }, [])

    const AddFriend = (user) => {
        const id = auth.currentUser.uid
        const reference = ref(database, `users/${id}/friends/${user.id}`)
        set(reference, { username: user.username, firstName: user.firstName, id: user.id })
        const reference2 = ref(database, `users/${id}`)
        onValue(reference2, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                const reference = ref(database, `users/${user.id}/friends/${id}`)
                set(reference, { username: data.username, firstName: data.firstName, id: data.id })
            }
        })
        setFriendSearch("")
    }

    const uploadImageToStorage = (imageFile) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const id = user.uid
                if (!imageFile) return;
                const imageRef = refstorage(storage, `images/${id}`);
                return uploadBytes(imageRef, imageFile);

            }
        })
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged((user) => {
            if (user && newname) {
                const id = user.uid
                const reference = ref(database, `users/${id}/firstName`)
                set(reference, newname)
            }
            uploadImageToStorage(imageUpload)
                .then(() => {
                    const imageRef = refstorage(storage, `images/${auth.currentUser.uid}`)
                    getDownloadURL(imageRef)
                        .then((url) => setImageURL(url))
                })
                .catch((error) => {
                    console.error("Error uploading image: ", error);
                });
        })

    };

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])
    const [show, setShow] = useState(false)
    return (
        <>
            <S.ShowButton src='./Team.svg' onClick={() => setShow(!show)} display={width > 780 ? "none" : ""} />
            <S.Wrapper display={width > 780 || show ? "" : "none"}>
                <S.Box >
                    <S.TopWrapper>
                        {editActive &&
                            <S.EditBox>
                                <S.EditForm onSubmit={handleFormSubmit} as={"form"}>
                                    <S.Edit>Edit profile</S.Edit>
                                    <S.ChangeName placeholder='Name' value={newname} onChange={(e) => setNewName(e.target.value)} />
                                    <S.EditH2>Change profile picture</S.EditH2>
                                    <S.ImgInput type='file' accept='image/*' onChange={(e) => setImageUpload(e.target.files[0])} />
                                    <S.EditButton type='submit' >Confirm</S.EditButton>
                                </S.EditForm>
                            </S.EditBox>
                        }
                        {searchActive &&
                            <Search 
                                setSearchActive={setSearchActive}
                                users={users}
                                AddFriend={AddFriend}
                            />
                        }

                        <div style={{ display: "flex", alignItems: 'center' }}>
                            <S.UserImage src={imageURL ? imageURL : "./user.svg"} />
                            <div style={{ marginLeft: "20px" }}>
                                {userLogged &&
                                    <>
                                        <S.Name>{userLogged.firstName}</S.Name>
                                        <S.User>{userLogged.username}</S.User>
                                    </>
                                }
                            </div>
                        </div>
                        <div>
                            <S.Dots src='./editUser.svg' onClick={() => setEditActive(!editActive)} />
                            <S.AddFriendsImg src='./userAdd.svg' onClick={() => setSearchActive(true)} />
                        </div>
                    </S.TopWrapper>

                    <S.MessageBox>
                        <S.Message>Messages</S.Message>
                        <S.Container>
                            <S.SearchImg src='./search.svg' />
                            <S.Search placeholder='Search Chats' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </S.Container>
                        <Friends search={search} />
                    </S.MessageBox>
                </S.Box>



            </S.Wrapper>
        </>
    )
}

export default Menu