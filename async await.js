// 3 arrays....2 of them have same values


const schoolRegister = [
    {   rollNo : 01,
        stdName : "Hitesh",
        inSportClub : true,
        inAnimeClub : false,
    },
    {   rollNo : 02,
        stdName : "Rajat",
        inSportClub : false,
        inAnimeClub : true,
    },
    {   rollNo : 03,
        stdName : "Darshan",
        inSportClub : false,
        inAnimeClub : true,
    },
    {   rollNo : 04,
        stdName : "Hiren",
        inSportClub : false,
        inAnimeClub : true,
    },
    {   rollNo : 05,
        stdName : "Jay",
        inSportClub : false,
        inAnimeClub : false,
    },
    {   rollNo : 06,
        stdName : "Sahil",
        inSportClub : true,
        inAnimeClub : false,
    },
    {   rollNo : 07,
        stdName : "Dhruvin",
        inSportClub : false,
        inAnimeClub : true,
    },
    {   rollNo : 08,
        stdName : "Pathik",
        inSportClub : true,
        inAnimeClub : false,
    },
    {
       rollNo : 09,
        stdName : "Miraj",
        inSportClub : true,
        inAnimeClub : false
    }
];


const isStudentInAnyClubs = () => 
{
    return new Promise ((resolve,reject) => {

   const studentInClub =  schoolRegister.filter((student) =>
    {
        if (student.inAnimeClub === true || student.inSportClub === true )
        {
            return resolve(studentInClub)
        }
        
    })
})
}


isStudentInAnyClubs().then((student));





