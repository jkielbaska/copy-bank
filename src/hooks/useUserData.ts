import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { get, ref, child } from "firebase/database";
import { UserData } from "../types/UserData";
import { ResultHandler } from "../types/ResultHandler";

interface UseDataUser extends ResultHandler {
  userId?: string;
}

export const useUserData = ({ userId, onError }: UseDataUser) => {
  const [userData, setUserData] = useState<UserData>();

  const getData = ref(db);

  useEffect(() => {
    if (userId) {
      get(child(getData, `/users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          } else {
            onError?.("Nie ma takiego uzytkownika");
          }
        })
        .catch((err) => {
          onError?.(err as Error);
        });
    }
  }, [userId]);
  return userData;
};
// const dbRef = ref(db);
// get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     const setUserData = () => {
//       userData.push(snapshot.val());
//       console.log(userData);
//     };
//     setUserData();
//     console.log(snapshot.val());
//   } else {
//     console.log("no data");
//   }
// });

// const dbRef = ref(db);
// get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("no data");
//   }
// });
// };
// useUserData();
// };

// useEffect(() => {
//   const fetchData = () => {
//     get(child(getData, `/users`)).then((snapshot) => {
//       const fetched = snapshot.val();
//       console.log(fetched);
//       setUserData(fetched);
//     });
//   };
//   fetchData();
//   console.log(userData);
// }, []);

// const [userData, setUserData] = useState<getUserDataProps[]>([]);
// const dbRef = ref(db);

// const dupa = async () => {
//   await onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//         // if (snapshot.exists()) {
//         const updateUserData = () => {
//           setUserData(snapshot.val());
//           console.log(userData);
//         };
//         updateUserData();
//         // } else {
//         //   console.log("no data");
//         // }
//       });
//     }
//   });
// };
// useEffect(() => {
//   dupa();
// }, []);

// const dbRef = ref(db);
// get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     const setUserData = () => {
//       userData.push(snapshot.val());
//       console.log(userData);
//     };
//     setUserData();
//     console.log(snapshot.val());
//   } else {
//     console.log("no data");
//   }
// });

// const FetchData = () => {
//   const [userData, setUserData] = useState<getUserDataProps[]>([]);
//   const [userId, setUserId] = useState("");

//   const getId = async () => {
//     await onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//         console.log(userId);
//         return userId;
//       }
//     });
//   };

//   const getUserData = async () => {
//     await getId();
//     const dbRef = ref(db);
//     get(child(dbRef, `users/${userId}`))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           setUserData(snapshot.val());
//           console.log(userData);
//         } else {
//           console.log("No data available");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);
// };
