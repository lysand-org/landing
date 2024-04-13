<template>
    <div class="rounded ring-1 ring-white/5 p-6 flex flex-col bg-dark-800 hover:bg-dark-700 duration-200">
        <div class="flex flex-row">
            <img class="h-12 w-12 rounded ring-1 ring-white/5" :src="status.account.avatar" alt="" />
            <div class="flex flex-col items-start justify-around ml-4 grow overflow-hidden">
                <div class="flex flex-row items-center justify-between w-full">
                    <span class="font-semibold text-gray-200 line-clamp-1 break-all">{{
                status.account.display_name }}</span>
                    <span class="text-gray-400 text-sm ml-2 line-clamp-1 break-all shrink-0">{{ timeAgo }}</span>
                </div>
                <span class="text-gray-400 text-sm line-clamp-1 break-all w-full">@{{
                status.account.acct
            }}</span>
            </div>
        </div>
        <div class="mt-6 prose prose-invert prose-a:no-underline" v-html="content">
        </div>
        <div
            class="mt-6 flex flex-row items-stretch justify-between text-sm h-10 hover:[&>button]:bg-dark-800 [&>button]:duration-200 [&>button]:rounded [&>button]:flex [&>button]:flex-1 [&>button]:flex-row [&>button]:items-center [&>button]:justify-center">
            <button>
                <Icon name="tabler:arrow-back-up" class="h-5 w-5 text-gray-200" aria-hidden="true" />
                <span class="text-gray-400 mt-0.5 ml-2">{{ numberFormat(status.replies_count) }}</span>
            </button>
            <button>
                <Icon name="tabler:heart" class="h-5 w-5 text-gray-200" aria-hidden="true" />
                <span class="text-gray-400 mt-0.5 ml-2">{{ numberFormat(status.favourites_count) }}</span>
            </button>
            <button>
                <Icon name="tabler:repeat" class="h-5 w-5 text-gray-200" aria-hidden="true" />
                <span class="text-gray-400 mt-0.5 ml-2">{{ numberFormat(status.reblogs_count) }}</span>
            </button>
            <button>
                <Icon name="tabler:quote" class="h-5 w-5 text-gray-200" aria-hidden="true" />
                <span class="text-gray-400 mt-0.5 ml-2">{{ numberFormat(304) }}</span>
            </button>
            <button>
                <Icon name="tabler:dots" class="h-5 w-5 text-gray-200" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Status } from "~/types/mastodon/status";

const args = defineProps<{
    status: Status;
}>();

const timeAgo = useTimeAgo(args.status.created_at);

const mentions = await useResolveMentions(args.status.mentions);
const content = await useParsedContent(args.status.content, args.status.emojis, mentions.value);
const numberFormat = (number: number) => new Intl.NumberFormat(undefined, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
}).format(number);
</script>