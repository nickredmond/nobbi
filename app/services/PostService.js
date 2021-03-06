export const getRandomPosts = (userToken, count) => {
    // const postUrl = `${process.env.REACT_APP_POST_SERVICE_BASE_URL}/posts/random?count=${count}`;
    // return fetch(postUrl)
    //     .then((response) => response.json());

    return new Promise((resolve, reject) => {
        var testPosts = [
            {
                "_id": "asdfdsafdsafdsafdsf1",
                "author": "thenickshaveeyes",
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 10,
                    "inspiring": 0,
                    "weird": 2,
                    "sad": 0,
                    "helpful": 1
                },
                "userVote": null
            },
            {
                "_id": "asdfdsafdsafdsafdsf12",
                "author": "kdilly31",
                "textContent": "Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful. ", 
                imageSources: [],
                "voteCounts": {
                    "funny": 8,
                    "inspiring": 2,
                    "weird": 1,
                    "sad": 0,
                    "helpful": 0
                },
                "userVote": "funny"
            },
            {
                "_id": "asdfdsafdsafdsafdsf13",
                "author": "[anonymous]",
                "textContent": "Respect forming clothes do in he. Course so piqued no an by appear. Themselves reasonable pianoforte so motionless he as difficulty be. Abode way begin ham there power whole. Do unpleasing indulgence impossible to conviction. Suppose neither evident welcome it at do civilly uncivil. Sing tall much you get nor. ", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg"
                ],
                "voteCounts": {
                    "funny": 0,
                    "inspiring": 7,
                    "weird": 0,
                    "sad": 0,
                    "helpful": 4
                },
                "userVote": "helpful"
            },
            {
                "_id": "asdfdsafdsafdsafdsf14",
                "author": "[anonymous]",
                "textContent": null, 
                imageSources: [ 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 17,
                    "inspiring": 8,
                    "weird": 0,
                    "sad": 0,
                    "helpful": 2
                },
                "userVote": null
            },
            {
                "_id": "asdfdsafdsafdsafdsf15",
                "author": "rachel.gordon.rules",
                "textContent": "Up unpacked friendly ecstatic so possible humoured do. Ample end might folly quiet one set spoke her. We no am former valley assure. Four need spot ye said we find mile. Are commanded him convinced dashwoods did estimable forfeited. Shy celebrated met sentiments she reasonably but. Proposal its disposed eat advanced marriage sociable. Drawings led greatest add subjects endeavor gay remember. Principles one yet assistance you met impossible.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 2,
                    "inspiring": 0,
                    "weird": 5,
                    "sad": 1,
                    "helpful": 0
                },
                "userVote": "weird"
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 10,
                    "inspiring": 0,
                    "weird": 2,
                    "sad": 0,
                    "helpful": 1
                }
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 10,
                    "inspiring": 0,
                    "weird": 2,
                    "sad": 0,
                    "helpful": 1
                }
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ],
                "voteCounts": {
                    "funny": 10,
                    "inspiring": 0,
                    "weird": 2,
                    "sad": 0,
                    "helpful": 1
                }
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            },
            {
                "textContent": "This is a mock post. Seeing this means you're hitting a mock server API in Postman, and don't get too excited until you start seeing some real posts coming down the pipeline.", 
                imageSources: [
                    "https://previews.123rf.com/images/alexwhite/alexwhite1511/alexwhite151102218/47813409-test-green-fresh-circle-3d-modern-flat-design-icon-on-white-background.jpg", 
                    "https://previews.123rf.com/images/alexwhite/alexwhite1505/alexwhite150500216/39376221-testare-verde-lucido-dell-icona-di-web.jpg"
                ]
            }
        ];

        resolve(testPosts);
    })
}

export const voteForPost = (userToken, postId, category) => {

}