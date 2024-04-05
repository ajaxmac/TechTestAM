## TechTestAM

This repo is for my application to Retail Zoo.

As per instructions, this React Native app has three screens:
- Home - listing my repos
- SingleRepo view page
- Add new repo page with name nad description

After adding a repo the app needs to be refreshed to list the new repo. Not ideal Ux, but this is a short test and there is not enough enough time to add this feature.

Additionally, it would be good to add edit mutations to be able to update repos. And to list more details about the repo, such as files on the Single Repo page.

Short video of the app in action is in the root of this repo as `tech-test-demo.mp4`

Apollo client setup is in /graphql folder, as are the queries and mutation.

This has only ben tested on iOS. 

If you want to test it on your own github account, setup a github access token with read-write permission to list and create repos and put it in a `.env` file with this variable name: `REACT_APP_GITHUB_ACCESS_TOKEN`

Tests have been written for /components/repo/Repo && components/single-repo/SingleRepo.tsx as they do most of the display, and testing the screens requires a lot of mocks, and has diminishing returns.


