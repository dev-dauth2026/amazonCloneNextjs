const MenuListArray=[
    {
        id:1,
        categoryTitle:"Trending",
        menu:['Best Sellars', 'New Releases', 'Movers and Shakers']         
      
    },
    {
        id:2,
        categoryTitle:"Digital Contents & Devices",
        subCategory:[
            {
                id:1,
                subCategorytitle:'Echo & Alexa',
                title:[
                    {
                        id:1,
                        name:'Amazon Echo',
                        subtitle:[
                            {
                                id:1,
                                subtitleName:'Echo Smart Speakers',
                                link: '/'
                            },
                            {
                                id:2,
                                subtitleName:'Echo Smart Displays',
                                link: '/'
                            },
                            {
                                id:3,
                                subtitleName:'Alexa on the Go',
                                link: '/'
                            },
                            {
                                id:3,
                                subtitleName:'See All Amazon Eco Device',
                                link: '/'
                            },
                            
                        ]

                    }
                ],
                link:'/'
            }
        ]         
      
    },
    {
        id:3,
        categoryTitle:"Shop By Department",
        subCategory:[
            {
                id:1,
                subCategorytitle:'Books',
                title:[
                    {
                        id:1,
                        name:'Books',
                        subtitle:[
                            {
                                id:1,
                                subtitleName:'All Books',
                                link: '/'
                            },
                            {
                                id:2,
                                subtitleName:'Best Sellars',
                                link: '/'
                            },
                            {
                                id:3,
                                subtitleName:'New Releases',
                                link: '/'
                            },
                            {
                                id:3,
                                subtitleName:'Trending Now',
                                link: '/'
                            },
                            
                        ]

                    }
                ],
                link:'/'
            }
        ]         
      
    },


   
]
export default MenuListArray;   