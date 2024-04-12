<template>
    <div>
        <HeadersNavbar />

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded duration-200 px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-50/10 hover:ring-gray-50/20">
                        Latest release: <NuxtLink href="/" class="font-semibold text-pink-600">Lysand 0.4</NuxtLink>
                    </div>
                </div>
                <div class="text-center">
                    <h1
                        class="text-4xl font-bold tracking-tight bg-clip-text text-transparent sm:text-6xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                        Federated networking made with
                        care</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300">Lysand is a federated social media project with its
                        own protocol, aiming to be faster, lighter, more configurable and more efficient than its
                        predecessors.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <ButtonsPrimary>Protocol Documentation</ButtonsPrimary>
                        <ButtonsSecondary>Server Source</ButtonsSecondary>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="relative mx-auto max-w-2xl isolate px-6 lg:px-8 py-10 bg-dark-800 shadow-xl rounded ring-1 ring-white/5">
            <div class="prose prose-invert">
                <h1>What is this project about?</h1>

                <dl class="mt-0 space-y-1 divide-white/10">
                    <HeadlessDisclosure as="div" class="pt-0" v-slot="{ open }">
                        <dt>
                            <HeadlessDisclosureButton
                                class="flex w-full items-start justify-between bg-dark-500 hover:bg-dark-400 duration-200 text-left text-white ring-1 ring-white/5 rounded px-4 py-2">
                                <span class="space-x-3">
                                    <span class="text-base font-semibold leading-7">ActivityPub's issues
                                    </span>
                                    <span class="text-xs text-gray-400 font-normal">
                                        (click to open)
                                    </span>
                                </span>
                                <span class="ml-6 flex h-7 items-center">
                                    <Icon name="tabler:plus" v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                    <Icon name="tabler:minus" v-else class="h-6 w-6" aria-hidden="true" />
                                </span>
                            </HeadlessDisclosureButton>
                        </dt>
                        <HeadlessDisclosurePanel as="dd" class="ring-1 ring-white/5 py-0.5 px-4 bg-dark-700 rounded">
                            <p>
                                If you're here, chances are you already know about <NuxtLink
                                    href="https://en.wikipedia.org/wiki/Fediverse" target="_blank">the
                                    Fediverse</NuxtLink>, a network of federated servers that communicate with each
                                other
                                using a
                                common
                                protocol (ActivityPub)
                            </p>

                            <p>For example, here are a list of applications that integrate with the Fediverse:</p>

                            <ul>
                                <li>
                                    <NuxtLink href="https://joinmastodon.org/" target="_blank">Mastodon</NuxtLink> - A
                                    Twitter-like social
                                    media
                                    platform
                                </li>
                                <li>
                                    <NuxtLink href="https://pleroma.social/" target="_blank">Pleroma</NuxtLink> -
                                    Similar to
                                    Mastodon, with
                                    additional features
                                </li>
                                <li>
                                    <NuxtLink href="https://pixelfed.org/" target="_blank">PixelFed</NuxtLink> - An
                                    Instagram-like
                                    social
                                    media
                                    platform
                                </li>
                                <li>
                                    <NuxtLink href="https://peertube.tv/" target="_blank">PeerTube</NuxtLink> - A
                                    YouTube-like
                                    video platform
                                </li>
                                <li>
                                    <NuxtLink href="https://writefreely.org/" target="_blank">WriteFreely</NuxtLink> - A
                                    minimalist blogging
                                    platform
                                </li>
                            </ul>

                            <p>These applications are all part of the Fediverse, and they can all communicate with
                                each other.
                                For
                                example, a user on Mastodon can follow a user on Pleroma, and vice versa.</p>

                            <p>However, there are some issues most Fediverse software, which this project aims to
                                tackle.</p>

                            <h2>Issues with the Fediverse</h2>

                            <h3>The Mastodon Situation</h3>

                            <p>It turns out that if you write a fully compliant ActivityPub server, it's not going
                                to be able to
                                federate with any of the major instances. This is because the base specification is
                                not very
                                useful,
                                as it is missing a lot of features that are necessary for a modern social media
                                platform.
                            </p>

                            <p>For example, Mastodon has a feature called "custom emojis", which allows users to
                                upload their
                                own
                                emojis. This is not part of the ActivityPub specification, so if you write a server
                                that is
                                fully
                                compliant with the specification, it won't be able to display custom emojis.</p>

                            <p>In fact, Mastodon has diverged so much from the base specification that it becomes
                                very difficult
                                to
                                write a server that can federate with it. Some issues caused by this divergence are
                                sometimes
                                not
                                even documented, leading to unexplained errors.</p>

                            <h3>Complexity</h3>

                            <p>Another issue with the Fediverse/ActivityPub is that it uses complex data structures
                                that are
                                difficult
                                to work with, such as the <NuxtLink href="https://json-ld.org/" target="_blank">JSON-LD
                                    format</NuxtLink>.
                                This in
                                turn makes it develop to create new software that integrates with the Fediverse.
                            </p>

                            <h2>Issues with Fediverse software</h2>

                            <h3>Performance</h3>

                            <p>
                                A lot of the most popular Fediverse software like Mastodon and Pleroma are known to
                                be very
                                slow,
                                which makes it hard for people with less resources to run their own instances. This
                                contributes
                                (but
                                is not the root cause of) to <strong>centralization</strong> of the Fediverse into a
                                few large
                                servers.
                            </p>

                            <h3>Configurability</h3>

                            <p>
                                Configurability is another issue with Mastodon or Misskey. They are very opinionated
                                about how
                                they
                                should be run, and it's hard to change that. For example, if you want to make
                                Mastodon support
                                emoji
                                reactions,
                                you have to fork the entire project and maintain it yourself.
                            </p>

                            <h3>Moderation</h3>

                            <p>
                                Yet another concern is moderation. Mastodon has a very basic moderation system,
                                which places the
                                burden
                                of moderation on the instance moderators and users through reports. This is not very
                                effective,
                                as
                                it just ends up in moderators being overwhelmed by things that could be fixed
                                through software.
                            </p>
                        </HeadlessDisclosurePanel>
                    </HeadlessDisclosure>
                </dl>

                <h2>What is Lysand?</h2>

                <p>
                    Lysand is a federated social media project with its own protocol, aiming to be faster, lighter, more
                    configurable and more efficient than its predecessors. It is designed to be easy to use, easy to
                    configure, and easy to moderate.
                </p>

                <h3>The Lysand Protocol</h3>

                <p>
                    The Lysand protocol is a simple, easy-to-use protocol based on normal JSON objects. Adding
                    federation capabilities to your software is very simple (for outgoing federation, it should take a
                    few lines of code to add WebFinger, and then a bit more code to add user profiles/statuses)
                </p>

                <p>
                    More information about the Lysand protocol <NuxtLink href="https://lysand.org" target="_blank">can
                        be found
                        at the documentation</NuxtLink>
                </p>
            </div>
        </div>

        <footer class=" py-20"></footer>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>