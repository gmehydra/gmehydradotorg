import { FederatedServerInfo } from "./federated-server-info.interface";


export const federatedServerList: FederatedServerInfo[] = [
    {
        name: 'DRSGME/WhyDRS Lemmy',
        displayUrl: 'lemmy.whynotdrs.org',
        fullUrl: 'https://lemmy.whynotdrs.org/',
        adminEmail: '',
        adminCreds: [
            {credName: 'DRSGME.org team', credUrl: 'https://www.drsgme.org'},
        ],
        drsEvidenceLink: '',
        implementation: 'Lemmy',
        serverLocation: '',
        thumbnailFile: 'assets/drsgmewhydrs-thumb.png',
        serverDescription: '',
    },
    // {
    //     name: 'GMESTOCK',
    //     displayUrl: 'gmestock.com',
    //     fullUrl: 'https://gmestock.com/',
    //     adminEmail: '',
    //     adminCreds: [
    //         {credName: '@pigUw', credUrl: 'https://gmestock.com/u/pigUw'},
    //     ],
    //     drsEvidenceLink: '',
    //     implementation: 'Lemmy',
    //     serverLocation: '',
    //     thumbnailFile: 'assets/gmestockdotcom-thumb.png',
    //     serverDescription: '',
    // },
    {
        name: 'Superstork',
        displayUrl: 'www.superstork.org',
        fullUrl: 'https://www.superstork.org/',
        adminEmail: 'superstork_admin@protonmail.com',
        adminCreds: [
            {credName: '@jersan', credUrl: 'https://www.superstork.org/@jersan'},
            {credName: 'u/jersan', credUrl: 'https://www.reddit.com/user/jersan'},
        ],
        drsEvidenceLink: 'https://www.reddit.com/user/jersan/comments/108bnm1/xxxx_booked/',
        implementation: 'Mastodon',
        serverLocation: 'Toronto, Canada',
        thumbnailFile: 'assets/superstork-thumb.png',
        serverDescription: 'The superstork protects the nest. This is a place for theoretical discussions about business and stocks - specifically GameStop stock ($GME). Opinions and memes welcome.',
    },
    {
        name: 'The Cyber Network',
        displayUrl: 's.thecybernetwork.us',
        fullUrl: 'https://s.thecybernetwork.us/',
        adminEmail: 'contact@thecybernetwork.us',
        adminCreds: [
            {credName: '@venivv', credUrl: 'https://s.thecybernetwork.us/@venivv'},
            {credName: 'u/Anon_0365Admin', credUrl: 'https://www.reddit.com/user/Anon_0365Admin'},
        ],
        drsEvidenceLink: 'https://www.reddit.com/r/Superstonk/comments/xvr1bl/moving_this_over_from_gmeorphans/',
        implementation: 'Mastodon',
        serverLocation: '',
        thumbnailFile: 'assets/cybernetwork-thumb.png',
        serverDescription: 'A place for those of us that want to be a part of a decentralized future. We are gamers, techs, drone pilots, and a multitude of other hobbyists.',
    },
]