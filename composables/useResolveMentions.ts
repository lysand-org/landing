import type { Account } from "~/types/mastodon/account";
import type { Mention } from "~/types/mastodon/mention";

export const useResolveMentions = async (
    mentions: Mention[],
): Promise<Ref<Account[]>> => {
    return ref([
        {
            id: "018eb863-753f-76ff-83d6-fd590de7740a",
            username: "gordonramsaylover301",
            display_name: "Gordon Ramsay Lover",
            note: "",
            url: "https://social.lysand.org/@jessew",
            avatar: "https://www.usaonlinecasino.com/wp-content/uploads/2020/01/5d6955e0d2260.image_.jpg",
            header: "",
            locked: true,
            created_at: "2024-04-07T11:48:29.623Z",
            followers_count: 2,
            following_count: 4,
            statuses_count: 23,
            emojis: [],
            fields: [],
            bot: false,
            avatar_static: "",
            header_static: "",
            acct: "gordonramsaylover301",
            limited: false,
            moved: null,
            noindex: false,
            suspended: false,
            group: false,
        },
    ]);
};
