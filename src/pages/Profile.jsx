import "../stylesheets/Profile.scss";

import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import ProfileCompletedElement from "../components/ProfileCompletedElement.jsx";
import Margott from "../img/p/margott.jpg";
import editIcon from "../img/i/edit.svg";
import EditProfile from "../components/EditProfile.jsx";

import fetchProfile from "../api/fetchProfile.js";
import ProfileSkeleton from "../components/skeletons/profile/index.jsx";

import editProfile from "../api/editProfile.js";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/index.js";
import useAuthToken from "../hooks/useAuthToken";
function Profile() {
    const [cookiesAuthToken, setCookiesAuthToken, removeCookiesAuthToken] =
        useAuthToken();
    const context = useContext(AuthContext);
    const authToken = context.authToken;
    const setAuthToken = context.setAuthToken;

    const navigate = useNavigate();
    let { profileId } = useParams();
    const isMe = profileId === "me";
    const [profileData, setProfileData] = useState();
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        async function setData() {
            const fetchedProfileData = await fetchProfile(
                profileId,
                authToken,
                navigate
            );
            if (fetchedProfileData.status === 401) {
                removeCookiesAuthToken();
                setAuthToken(false);
                return;
            }
            setProfileData(fetchedProfileData[0]);
            if (
                fetchedProfileData[0].name === "Пусто" ||
                fetchedProfileData[0].surName === "Пусто"
            ) {
                alert(
                    "Заполните профиль в редактировании!!! А то вас никто не увидит"
                );
            }
        }
        setData();
    }, [authToken, profileId]);

    async function onSaveEditing(newData) {
        const response = await editProfile(newData, authToken);
        if (response.status === 401) {
            removeCookiesAuthToken();
            setAuthToken(false);
            navigate("/login");
            return;
        }
        setIsEditing(false);
        async function setData() {
            const fetchedProfileData = await fetchProfile(profileId, authToken);
            setProfileData(fetchedProfileData[0]);
        }
        setData();
    }

    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={Margott} alt="ava" />
            </div>
            {!isEditing && profileData && (
                <div className="profile__info">
                    <div className="profile__name">{`${profileData.surName} ${profileData.name}`}</div>
                    {isMe && (
                        <>
                            <button
                                className="profile__edit"
                                onClick={() => setIsEditing(true)}
                            >
                                <img src={editIcon} alt="edit"></img>
                                Редактировать профиль
                            </button>
                        </>
                    )}
                    <div className="profile__contacts">
                        <div>
                            {`${profileData.contacts.type}: `}
                            <span>{profileData.contacts.value}</span>
                        </div>
                    </div>

                    <div className="profile__completedTasks">
                        <Dropdown
                            name={"Выполненные работы"}
                            numberOfElements={profileData.timesCompleted}
                            elements={profileData.completed.map((course) => (
                                <ProfileCompletedElement {...course} />
                            ))}
                        />
                    </div>
                </div>
            )}

            {isEditing && (
                <EditProfile
                    previuosData={profileData}
                    onSubmit={onSaveEditing}
                />
            )}
            {!profileData && <ProfileSkeleton />}
            {isMe && (
                <button
                    className="profile__exit"
                    onClick={() => {
                        setAuthToken(false);
                        removeCookiesAuthToken();
                        navigate("/login");
                    }}
                >
                    Выйти
                </button>
            )}
        </div>
    );
}
export default Profile;
