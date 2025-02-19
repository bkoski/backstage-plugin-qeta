# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.13.3](https://github.com/drodil/backstage-plugin-qeta/compare/v1.13.2...v1.13.3) (2023-06-27)

### [1.13.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.13.1...v1.13.2) (2023-06-22)


### Bug Fixes

* **getMostUpvotedQuestions:** fix url getMostUpvotedQuestions QetaClient ([761585d](https://github.com/drodil/backstage-plugin-qeta/commit/761585d537bac6ddfc333048aee8fb96357b7c48))

### [1.13.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.13.0...v1.13.1) (2023-06-20)


### Bug Fixes

* **bug-stats-card:** fix wrong path TopUpvotedCorrectAnswers ([f04f1cc](https://github.com/drodil/backstage-plugin-qeta/commit/f04f1ccf5c29823cd341d271ba7f2a2bb151e524))

## [1.13.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.12.0...v1.13.0) (2023-06-16)


### Features

* add stats for most questions and answers ([ab6f3fd](https://github.com/drodil/backstage-plugin-qeta/commit/ab6f3fd0de88516f5176a5720a8a30b8e9071fbe))
* add support for backstage events ([026064e](https://github.com/drodil/backstage-plugin-qeta/commit/026064e71d430b5fe05999238a9b345734316c3b)), closes [#55](https://github.com/drodil/backstage-plugin-qeta/issues/55)
* allow specifying allowed tags in app config ([ca0b443](https://github.com/drodil/backstage-plugin-qeta/commit/ca0b443ead1d78eae1eba301751a30e2c093fdba)), closes [#66](https://github.com/drodil/backstage-plugin-qeta/issues/66)


### Bug Fixes

* redirect back to entity page from question container ([85c7c24](https://github.com/drodil/backstage-plugin-qeta/commit/85c7c24c667367c5dd3e38e2b474c66b14fb8dc1)), closes [#65](https://github.com/drodil/backstage-plugin-qeta/issues/65)

## [1.12.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.11.0...v1.12.0) (2023-06-14)


### Features

* add css classes to different parts of the UI ([07294b3](https://github.com/drodil/backstage-plugin-qeta/commit/07294b3ff61af227dc4c2f25d63eef97461f710b)), closes [#66](https://github.com/drodil/backstage-plugin-qeta/issues/66)

## [1.11.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.10.3...v1.11.0) (2023-06-09)


### Features

* add statistics page and use discovery api in the client ([1ae307c](https://github.com/drodil/backstage-plugin-qeta/commit/1ae307cb21cc0b34c2511bdfc6f8ef1432d056cf))
* **statistics:** create top statistics component ([63db423](https://github.com/drodil/backstage-plugin-qeta/commit/63db4233da3dc1304dc6bc366a38f70fae3dd973))
* **statistics:** create user statistics endpoints ([60baee1](https://github.com/drodil/backstage-plugin-qeta/commit/60baee13ddcda754484abaebcede389274fde97c))
* **tests:** add tests to statistics endpoints ([038aa08](https://github.com/drodil/backstage-plugin-qeta/commit/038aa08549a0635b37f75fe6d9fa7582bbf94ca5))


### Bug Fixes

* **comments:** fix route comment ([ef18710](https://github.com/drodil/backstage-plugin-qeta/commit/ef18710da222db189f72752ac4db963b46c06927))
* few styling improvements to question page ([1f70d06](https://github.com/drodil/backstage-plugin-qeta/commit/1f70d064e7e60a2d415e4208368d3d5ef2ae9900))
* **lint:** fix tsc errors ([dbc11ad](https://github.com/drodil/backstage-plugin-qeta/commit/dbc11ad116b35a1ad074ba7e11c5387118b7247f))
* **minor:** fix locally change ([3eae89f](https://github.com/drodil/backstage-plugin-qeta/commit/3eae89fcc5c7af4fe6146f9938883ee3a720a4d5))
* tests + discovery api base url ([13c525f](https://github.com/drodil/backstage-plugin-qeta/commit/13c525f8a741a96e7a42b08ab87702c5b536e8ec))
* **tests:** fix ci tests ([05069db](https://github.com/drodil/backstage-plugin-qeta/commit/05069db3a49f8954ed36701c9d7fdd0e76b04cbc))

### [1.10.3](https://github.com/drodil/backstage-plugin-qeta/compare/v1.10.2...v1.10.3) (2023-05-23)


### Bug Fixes

* re-voting question or answer to work correctly ([462690c](https://github.com/drodil/backstage-plugin-qeta/commit/462690cab74026b7ca71fa4d18a2d4b565505593))
* yarn config for release action ([f98348a](https://github.com/drodil/backstage-plugin-qeta/commit/f98348ab1a9ac60433b08889784dfaa8a4dcf7b4))

### [1.10.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.10.1...v1.10.2) (2023-05-09)


### Bug Fixes

* yarn3 publish commands ([ed6bc9c](https://github.com/drodil/backstage-plugin-qeta/commit/ed6bc9c936e4c169da840e581e27631bcd9018bd))

### [1.10.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.10.0...v1.10.1) (2023-05-09)


### Bug Fixes

* resolution for react types ([0594b60](https://github.com/drodil/backstage-plugin-qeta/commit/0594b604fbf81c416c5f675f5cf3b8ac601aabc8))

## [1.10.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.9.4...v1.10.0) (2023-05-09)


### Features

* show truncated content of question in questions list ([3fec4e9](https://github.com/drodil/backstage-plugin-qeta/commit/3fec4e9ec710b79f158be12a29f178ffdee34161))


### Bug Fixes

* add missing character in regex ([c53a51d](https://github.com/drodil/backstage-plugin-qeta/commit/c53a51d8442538fd32ce65e090b8ff2feccc0daa))

### [1.9.4](https://github.com/drodil/backstage-plugin-qeta/compare/v1.9.3...v1.9.4) (2023-05-08)


### Bug Fixes

* correct extension parameters ([27b4c3b](https://github.com/drodil/backstage-plugin-qeta/commit/27b4c3be8c3be6d893061905b0db8f2e696d79f7))
* remove resolutions for react ([1461139](https://github.com/drodil/backstage-plugin-qeta/commit/1461139b23dcaea350a1568bca29a268b83ebcb2))

### [1.9.3](https://github.com/drodil/backstage-plugin-qeta/compare/v1.9.2...v1.9.3) (2023-05-08)


### Bug Fixes

* correct attachment location type ([8d13e08](https://github.com/drodil/backstage-plugin-qeta/commit/8d13e08e59c829866824da9ded913cb9d270a5b5))

### [1.9.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.9.1...v1.9.2) (2023-05-08)


### Bug Fixes

* add missing export for homepage component ([11fa66d](https://github.com/drodil/backstage-plugin-qeta/commit/11fa66d8310ce4a5ab06ba18a43522f01a692c7b))

### [1.9.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.9.0...v1.9.1) (2023-05-08)


### Bug Fixes

* make Q&A config optional ([bc2bb6a](https://github.com/drodil/backstage-plugin-qeta/commit/bc2bb6ac17f49919edd43f0e6114006edc3434ed))

## [1.9.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.8.0...v1.9.0) (2023-05-08)


### Features

* add questions table component and homepage card ([0ad71b9](https://github.com/drodil/backstage-plugin-qeta/commit/0ad71b9a08bec243cdf58b0b466eb6e1c2815dbb)), closes [#54](https://github.com/drodil/backstage-plugin-qeta/issues/54)
* automatic cleanup of question/answer attachments ([be447b9](https://github.com/drodil/backstage-plugin-qeta/commit/be447b9b7b09ae50ca90110ebe02ccc9ea704f64))


### Bug Fixes

* Add missing createPermissionIntegrationRouter call ([1379a01](https://github.com/drodil/backstage-plugin-qeta/commit/1379a01cebf66a4643c3c50dea38c3b1ae07a854))
* add react types as resolutions ([d972168](https://github.com/drodil/backstage-plugin-qeta/commit/d972168210a40b85f54b9748ac86c71e580c54d2))
* add react types to devDeps ([6eaeb60](https://github.com/drodil/backstage-plugin-qeta/commit/6eaeb60d51d3eb40fd22348aaf5ff80f0c17c14e))
* **local:** docker compose config ([3cdf861](https://github.com/drodil/backstage-plugin-qeta/commit/3cdf861e84f4e61e49511dfc69895a75cc734eb6))
* move back to TS 4.7 ([c2a3bdd](https://github.com/drodil/backstage-plugin-qeta/commit/c2a3bdd796e66cd1aa45fc28f33e83794dc6835e))

## [1.8.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.7.0...v1.8.0) (2023-03-27)


### Features

* support analytics from Q&A ([72fff17](https://github.com/drodil/backstage-plugin-qeta/commit/72fff1763a254d30f5dedbc3e43020e9f50e17ad)), closes [#51](https://github.com/drodil/backstage-plugin-qeta/issues/51)


### Bug Fixes

* change search collator to return only IndexableDocuments ([4642297](https://github.com/drodil/backstage-plugin-qeta/commit/46422973edec7bd7eb4fbef6aa2e1e5052d62cc8)), closes [#52](https://github.com/drodil/backstage-plugin-qeta/issues/52)

## [1.7.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.6.2...v1.7.0) (2023-03-16)


### Features

* allow commenting questions and answers ([b34be05](https://github.com/drodil/backstage-plugin-qeta/commit/b34be05e05a15ca6037ec382cc7ed6aebb44006d)), closes [#42](https://github.com/drodil/backstage-plugin-qeta/issues/42)


### Bug Fixes

* check for questions to be in the response ([1a0fffc](https://github.com/drodil/backstage-plugin-qeta/commit/1a0fffc7075b5dae9b14e9a7bee2849517a2ce4f))
* flickering on questions page due to skeleton ([0ab0673](https://github.com/drodil/backstage-plugin-qeta/commit/0ab0673da91276d47ed919759328554ce7894352))
* handle unauthorized listing properly ([6da5d08](https://github.com/drodil/backstage-plugin-qeta/commit/6da5d08cd980246801a0d2ca665107ca520366d5))
* replace skeleton in TagsContainer ([783aa32](https://github.com/drodil/backstage-plugin-qeta/commit/783aa325538b89323d1ccd2866220c773df078a5))

### [1.6.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.6.1...v1.6.2) (2023-03-15)


### Bug Fixes

* filter updated when searchQuery not changed ([afb6334](https://github.com/drodil/backstage-plugin-qeta/commit/afb63346c24d4436e46ad850af15ccd7837de91c))

### [1.6.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.6.0...v1.6.1) (2023-03-15)


### Bug Fixes

* add question page inside container ([a8ffd26](https://github.com/drodil/backstage-plugin-qeta/commit/a8ffd2600d05714d92098da25486bc3fa86b98db)), closes [#44](https://github.com/drodil/backstage-plugin-qeta/issues/44)
* contains filter for question search ([8fa9ed2](https://github.com/drodil/backstage-plugin-qeta/commit/8fa9ed2a0ba6c187dbd944c6b762fcfb799f7763))

## [1.6.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.5.1...v1.6.0) (2023-03-15)


### Features

* add support for both postgres and sqlite ([69258c8](https://github.com/drodil/backstage-plugin-qeta/commit/69258c88cce7b8f42734882b4875f5531bab4313))
* initial implementation supporting postgres ([5e1240b](https://github.com/drodil/backstage-plugin-qeta/commit/5e1240bf4d9042b085a53f109cc6e09c98522924))

### [1.5.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.5.0...v1.5.1) (2023-03-13)


### Bug Fixes

* update props for LinkButton, use basepath when navigate function is called ([a04edc1](https://github.com/drodil/backstage-plugin-qeta/commit/a04edc1b89666b4a35547fe23a69de97fb64ac62))
* update props for LinkButton, use basepath when navigate function is called ([bb01c59](https://github.com/drodil/backstage-plugin-qeta/commit/bb01c5915097232a327129fd16f1eb1b6b02d482))

## [1.5.0](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.24...v1.5.0) (2023-03-07)


### Features

* add hot questions list ([66e33b8](https://github.com/drodil/backstage-plugin-qeta/commit/66e33b8e079a10ba0fcde0e6fb7b01d4e590ca0e))
* add optional permissions framework to the plugin ([6c60c24](https://github.com/drodil/backstage-plugin-qeta/commit/6c60c24203b9cd090d11850b253cf4588ef440a7)), closes [#41](https://github.com/drodil/backstage-plugin-qeta/issues/41)
* add shortcut to users own questions ([78fb4c6](https://github.com/drodil/backstage-plugin-qeta/commit/78fb4c607ad646e42f4d0bb432a00043b89bb9fc)), closes [#32](https://github.com/drodil/backstage-plugin-qeta/issues/32)
* allow ask form to have callback after posting question ([39a7716](https://github.com/drodil/backstage-plugin-qeta/commit/39a771614d821d4ad890b1c60b4e39a846acb8f1))
* allow deleting questions and answers ([2ffdd12](https://github.com/drodil/backstage-plugin-qeta/commit/2ffdd125bd4d8a37792db8bc511e48f7b792ac73)), closes [#6](https://github.com/drodil/backstage-plugin-qeta/issues/6)
* allow editing of answers ([ec3705b](https://github.com/drodil/backstage-plugin-qeta/commit/ec3705b50457b113b32aa7c76fca0f84160f31bd)), closes [#5](https://github.com/drodil/backstage-plugin-qeta/issues/5)
* allow fetching questions by component ([e68767d](https://github.com/drodil/backstage-plugin-qeta/commit/e68767db6b418f7bc1ba73d6764f8519a1b5f2a0))
* allow filtering entity kinds with config ([d23e12a](https://github.com/drodil/backstage-plugin-qeta/commit/d23e12a529b8fe56a9ab812fd218ca3b98d7e1eb)), closes [#18](https://github.com/drodil/backstage-plugin-qeta/issues/18) [#17](https://github.com/drodil/backstage-plugin-qeta/issues/17)
* allow filtering with no votes ([98c57ef](https://github.com/drodil/backstage-plugin-qeta/commit/98c57ef12c3dac45ab67a227a1213d1dc37b2193)), closes [#4](https://github.com/drodil/backstage-plugin-qeta/issues/4)
* allow selecting number of questions in list ([43741c6](https://github.com/drodil/backstage-plugin-qeta/commit/43741c65139bb6791f5243e3e2b3f58b03d28e21)), closes [#19](https://github.com/drodil/backstage-plugin-qeta/issues/19)
* allow setting entity to ask in URL param ([f297e63](https://github.com/drodil/backstage-plugin-qeta/commit/f297e633e7040a4408c3a0508e5a08197fae53c4))
* allow setting qeta page title and subtitle ([c2a2ebf](https://github.com/drodil/backstage-plugin-qeta/commit/c2a2ebf3540341e5b55cb3958fa701139380cea3)), closes [#23](https://github.com/drodil/backstage-plugin-qeta/issues/23)
* allow showing title in question container ([e3b98d0](https://github.com/drodil/backstage-plugin-qeta/commit/e3b98d0169b51dbfed66487974ad1f01a2e06be6))
* allow specifying component for ask form ([19e7a9b](https://github.com/drodil/backstage-plugin-qeta/commit/19e7a9bdeba8a4786d33f5e92e990d79bab0d4e2))
* allow specifying own title for question container ([417a15a](https://github.com/drodil/backstage-plugin-qeta/commit/417a15a0697232e474ad9f0a7967000359d71833))
* allow users to edit questions ([e8d5923](https://github.com/drodil/backstage-plugin-qeta/commit/e8d5923db1fd9acb78b0115cba71ef3d096e8aec)), closes [#5](https://github.com/drodil/backstage-plugin-qeta/issues/5)
* allow users to favorite questions ([33cc0f6](https://github.com/drodil/backstage-plugin-qeta/commit/33cc0f64e3e3fa9c2e5ff31b5c6a500a40fda1a9)), closes [#33](https://github.com/drodil/backstage-plugin-qeta/issues/33)
* format all entities the same way ([4937da9](https://github.com/drodil/backstage-plugin-qeta/commit/4937da990f429c10fb8d2480ad1a0adfd58f4b59))
* group entities in ask form autocomplete by kind ([6838e32](https://github.com/drodil/backstage-plugin-qeta/commit/6838e32d165beead9c829e7ca0d34462c3e5ea6c))
* improve hot question trend rating ([a1ea2bf](https://github.com/drodil/backstage-plugin-qeta/commit/a1ea2bf60ff68e773972a2123394b5273725da0f))
* refactor author showing in question page ([129a197](https://github.com/drodil/backstage-plugin-qeta/commit/129a197d046aca0f095022122a7342b2955cc026))
* remember filter panel options ([384c378](https://github.com/drodil/backstage-plugin-qeta/commit/384c378a5c43dec9f592477b76ba64d4fb9acd4d)), closes [#15](https://github.com/drodil/backstage-plugin-qeta/issues/15)
* show linked entities in question list ([0cef37d](https://github.com/drodil/backstage-plugin-qeta/commit/0cef37d58b71cf4ac71aa33cc0d2c21665680173))


### Bug Fixes

* add common bump version config ([97a4c56](https://github.com/drodil/backstage-plugin-qeta/commit/97a4c56033b8d4d6b1ff5d02aaa15e181c776a9b))
* add missing mock for question update ([290c210](https://github.com/drodil/backstage-plugin-qeta/commit/290c210b71efc90fcbd7b1c9cd2570956a00bc53))
* allow voting multiple q&a ([532e7cd](https://github.com/drodil/backstage-plugin-qeta/commit/532e7cd7b34dbca56fd499cc02431971b5ec26aa)), closes [#28](https://github.com/drodil/backstage-plugin-qeta/issues/28)
* app-config ([fee6754](https://github.com/drodil/backstage-plugin-qeta/commit/fee67546adc94c4cb97f24b2f4f65d8baa1a1de9))
* change the components to entities ([c92f7ef](https://github.com/drodil/backstage-plugin-qeta/commit/c92f7ef5aab967b47d2a855564e217c65e5b69eb))
* change the search collator to only return answer contents ([32a3833](https://github.com/drodil/backstage-plugin-qeta/commit/32a3833d4918e1e38fcbb2e846012baf078f246d))
* delete button to be a link ([c265f8e](https://github.com/drodil/backstage-plugin-qeta/commit/c265f8ec6d456bd82bf4afaa7307dd4cb5775493))
* entity title in utils ([ae12125](https://github.com/drodil/backstage-plugin-qeta/commit/ae1212543afb1d41a48d7b7896114f58fffaf9ce))
* export QetaApi for external use ([53b089d](https://github.com/drodil/backstage-plugin-qeta/commit/53b089dbd4714b86fc13ab39cb2a1d823570d088))
* mkdocs ([ccc4d3a](https://github.com/drodil/backstage-plugin-qeta/commit/ccc4d3a3fa689cf4736ff8e15026e9aadd1778c5))
* no new question when editing ([80b8fde](https://github.com/drodil/backstage-plugin-qeta/commit/80b8fde1fe2e47b9d752b390794ac567b5ec9fe1))
* questions without correct answer query ([d09aea1](https://github.com/drodil/backstage-plugin-qeta/commit/d09aea1069ea7bd9eb12018f31b8ff04fb5d4fbd)), closes [#26](https://github.com/drodil/backstage-plugin-qeta/issues/26)
* references to components ([5475f7e](https://github.com/drodil/backstage-plugin-qeta/commit/5475f7ec82612cc4a9b52c5421922fe76dd6c937))
* remove deprecated versions from changelog ([77ef862](https://github.com/drodil/backstage-plugin-qeta/commit/77ef8627f44dbf5d58e09440c376ad4dc422f19a))
* remove optional from tags routing ([94ff27b](https://github.com/drodil/backstage-plugin-qeta/commit/94ff27b50d37da1eda56d78ab53c8516564cd879)), closes [#27](https://github.com/drodil/backstage-plugin-qeta/issues/27)
* show total number of questions in question container ([c5d078e](https://github.com/drodil/backstage-plugin-qeta/commit/c5d078e0c4382c7f86713fc51c609119680b4931))
* styling when long answer given without word breaks ([e4bb89b](https://github.com/drodil/backstage-plugin-qeta/commit/e4bb89bd5b4e2dda3cdc5edbb8cd9bae3c652882))
* support for node18 ([8a712e5](https://github.com/drodil/backstage-plugin-qeta/commit/8a712e5cedb59f25a39eab496dc0b6860cb5e428))
* top padding of question card ([d73642d](https://github.com/drodil/backstage-plugin-qeta/commit/d73642db7dfd8dd526be9b7e8a3be5b88dc48e9c))
* use primary color for buttons ([73c4e32](https://github.com/drodil/backstage-plugin-qeta/commit/73c4e3208f8791fbe462774445580b108feb9398)), closes [#37](https://github.com/drodil/backstage-plugin-qeta/issues/37)
* use relative url to question location from search collator ([c6a9cb7](https://github.com/drodil/backstage-plugin-qeta/commit/c6a9cb7790c985c4ee24fb55b2c0c3e1a261452d)), closes [#29](https://github.com/drodil/backstage-plugin-qeta/issues/29)
* vote buttons tooltip for questions ([c40729e](https://github.com/drodil/backstage-plugin-qeta/commit/c40729e35f1fa1d77bc9670cf6654e394d27ea0f))

### [1.4.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.4.0...v1.4.1) (2023-02-17)


### Bug Fixes

* top padding of question card ([014540b](https://github.com/drodil/backstage-plugin-qeta/commit/014540b30d1bff9e8b7d01f5fdab05321fb08f5a))

## [1.4.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.3.1...v1.4.0) (2023-02-13)


### Features

* group entities in ask form autocomplete by kind ([f690903](https://github.com/drodil/backstage-plugin-qeta/commit/f690903a0f5251cb5414ff03b73cd92b1c2d928a))


### Bug Fixes

* styling when long answer given without word breaks ([9240ca4](https://github.com/drodil/backstage-plugin-qeta/commit/9240ca482cb0f8d9dd6ed1242c79a75cc5de224a))

### [1.3.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.3.0...v1.3.1) (2023-02-07)


### Bug Fixes

* use primary color for buttons ([b06436c](https://github.com/drodil/backstage-plugin-qeta/commit/b06436c3e4abff79c1c106f6a944ad6262a159c1)), closes [#37](https://github.com/drodil/backstage-plugin-qeta/issues/37)

## [1.3.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.2.2...v1.3.0) (2023-02-01)


### Features

* add shortcut to users own questions ([f3d34a2](https://github.com/drodil/backstage-plugin-qeta/commit/f3d34a218e78ae451a12a656a6f405975ce6b89b)), closes [#32](https://github.com/drodil/backstage-plugin-qeta/issues/32)
* allow selecting number of questions in list ([1607e85](https://github.com/drodil/backstage-plugin-qeta/commit/1607e85080efce274677854e80b050b0a6ce7d7f)), closes [#19](https://github.com/drodil/backstage-plugin-qeta/issues/19)
* allow users to favorite questions ([25a82e9](https://github.com/drodil/backstage-plugin-qeta/commit/25a82e9f8bb86b6a4dfadd5f647850238ff88ff3)), closes [#33](https://github.com/drodil/backstage-plugin-qeta/issues/33)

### [1.2.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.2.1...v1.2.2) (2023-01-20)

### [1.2.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.2.0...v1.2.1) (2023-01-18)


### Bug Fixes

* use relative url to question location from search collator ([16a8d10](https://github.com/drodil/backstage-plugin-qeta/commit/16a8d106c66fb5c8696737f27c40ba673113fcb5)), closes [#29](https://github.com/drodil/backstage-plugin-qeta/issues/29)

## [1.2.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.1.2...v1.2.0) (2023-01-17)


### Features

* add hot questions list ([b07a314](https://github.com/drodil/backstage-plugin-qeta/commit/b07a3145832497f65176582e237ba1a78d12139d))
* allow showing title in question container ([300ecbc](https://github.com/drodil/backstage-plugin-qeta/commit/300ecbc773f257f0143d5cd7d891157651a285c0))
* allow specifying own title for question container ([72fe0ef](https://github.com/drodil/backstage-plugin-qeta/commit/72fe0efd07ad7feab153897a544d894faa52ed2e))
* format all entities the same way ([e79bf3f](https://github.com/drodil/backstage-plugin-qeta/commit/e79bf3f12701e18651cf58f47019e8bd62ac92cb))
* improve hot question trend rating ([065797d](https://github.com/drodil/backstage-plugin-qeta/commit/065797d041222a251bf6e59ce9a6c3b319d08228))


### Bug Fixes

* entity title in utils ([4b4e435](https://github.com/drodil/backstage-plugin-qeta/commit/4b4e4359a58d577832437b79abc06dc8799dd6a6))

### [1.1.2](https://github.com/drodil/backstage-plugin-qeta/compare/v1.1.1...v1.1.2) (2023-01-16)


### Bug Fixes

* allow voting multiple q&a ([c49c086](https://github.com/drodil/backstage-plugin-qeta/commit/c49c0867ade8374b1644163165a2d50f98bee414)), closes [#28](https://github.com/drodil/backstage-plugin-qeta/issues/28)

### [1.1.1](https://github.com/drodil/backstage-plugin-qeta/compare/v1.1.0...v1.1.1) (2023-01-13)


### Bug Fixes

* questions without correct answer query ([5634943](https://github.com/drodil/backstage-plugin-qeta/commit/5634943e7798241f18826036c8150a466349a33f)), closes [#26](https://github.com/drodil/backstage-plugin-qeta/issues/26)
* remove optional from tags routing ([956bcbf](https://github.com/drodil/backstage-plugin-qeta/commit/956bcbf0740108342fcbc67b29a18f8f9413485c)), closes [#27](https://github.com/drodil/backstage-plugin-qeta/issues/27)

## [1.1.0](https://github.com/drodil/backstage-plugin-qeta/compare/v1.0.1...v1.1.0) (2023-01-10)


### Features

* allow setting qeta page title and subtitle ([e9d306b](https://github.com/drodil/backstage-plugin-qeta/commit/e9d306b3bb52cf6917246ff07c22d60b9b9cc15e)), closes [#23](https://github.com/drodil/backstage-plugin-qeta/issues/23)


### Bug Fixes

* remove deprecated versions from changelog ([21c7f3a](https://github.com/drodil/backstage-plugin-qeta/commit/21c7f3a97f9ecde98ed4ff52bf476e6eaefcaea5))

### [1.0.1](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.30...v1.0.1) (2023-01-06)

First stable release. No new features or bug fixes.

### [0.1.30](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.29...v0.1.30) (2023-01-02)


### Features

* allow filtering with no votes ([75816ed](https://github.com/drodil/backstage-plugin-qeta/commit/75816eddf08977769fb6bbbf19d88de05922e374)), closes [#4](https://github.com/drodil/backstage-plugin-qeta/issues/4)
* remember filter panel options ([e96e6c2](https://github.com/drodil/backstage-plugin-qeta/commit/e96e6c26468d82d8c9396e3f17d70788eb888924)), closes [#15](https://github.com/drodil/backstage-plugin-qeta/issues/15)


### Bug Fixes

* export QetaApi for external use ([858574d](https://github.com/drodil/backstage-plugin-qeta/commit/858574d1fadda3b045cf18d999ed4d75e408e614))

### [0.1.29](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.28...v0.1.29) (2023-01-02)


### Features

* allow setting entity to ask in URL param ([b85fcb4](https://github.com/drodil/backstage-plugin-qeta/commit/b85fcb4fd00ee2b072483ac07b98fbb801818b03))

### [0.1.28](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.27...v0.1.28) (2023-01-02)


### Features

* allow ask form to have callback after posting question ([0477176](https://github.com/drodil/backstage-plugin-qeta/commit/04771765e66147e8a5bb2f52fa73f03ee6c55afb))
* allow editing of answers ([93d4870](https://github.com/drodil/backstage-plugin-qeta/commit/93d4870d4720dc12178671dfbde1588945fa3832)), closes [#5](https://github.com/drodil/backstage-plugin-qeta/issues/5)
* allow filtering entity kinds with config ([66a4ddb](https://github.com/drodil/backstage-plugin-qeta/commit/66a4ddb5fce0fe54c45ff929a0ce6eda6632cdc4)), closes [#18](https://github.com/drodil/backstage-plugin-qeta/issues/18) [#17](https://github.com/drodil/backstage-plugin-qeta/issues/17)


### Bug Fixes

* change the components to entities ([c42943e](https://github.com/drodil/backstage-plugin-qeta/commit/c42943e7c1e59947919f6218a4d976127e566a8a))
* references to components ([29a0580](https://github.com/drodil/backstage-plugin-qeta/commit/29a0580e62ca54af1edede7e25b58ca13544f0b8))

### [0.1.27](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.26...v0.1.27) (2022-12-30)


### Features

* allow specifying component for ask form ([45c7123](https://github.com/drodil/backstage-plugin-qeta/commit/45c7123ff5ab5909e08283f886e654e0a944ecb3))


### Bug Fixes

* show total number of questions in question container ([1281b60](https://github.com/drodil/backstage-plugin-qeta/commit/1281b60fde382ecd2fa55afe592cb6f1f6692907))

### [0.1.26](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.23...v0.1.26) (2022-12-30)


### Bug Fixes

* no new question when editing ([9c76dad](https://github.com/drodil/backstage-plugin-qeta/commit/9c76dad9aeb22ec5c639e4b6f82a2195067eec6d))
* add missing mock for question update ([8d1f7c7](https://github.com/drodil/backstage-plugin-qeta/commit/8d1f7c711f130791cfd459402cd4772b11f6e35c))
* change the search collator to only return answer contents ([32a3833](https://github.com/drodil/backstage-plugin-qeta/commit/32a3833d4918e1e38fcbb2e846012baf078f246d))
* delete button to be a link ([dbce2be](https://github.com/drodil/backstage-plugin-qeta/commit/dbce2be182f890a2f9d5b14706cb346b7922ca9c))
* vote buttons tooltip for questions ([95fa77c](https://github.com/drodil/backstage-plugin-qeta/commit/95fa77c45fbfed2bce149f8cc48e1c30bad70b5b))
* add margin to top buttons and fix search docs ([cf30db5](https://github.com/drodil/backstage-plugin-qeta/commit/cf30db51fd97b7b31524e8d4b07d63ceb29e5f05))


### Feature**s**

* allow deleting questions and answers ([e06c0e7](https://github.com/drodil/backstage-plugin-qeta/commit/e06c0e73b56aeead90b1b58f88b3321ac7f215f1)), closes [#6](https://github.com/drodil/backstage-plugin-qeta/issues/6)
* allow fetching questions by component ([e68767d](https://github.com/drodil/backstage-plugin-qeta/commit/e68767db6b418f7bc1ba73d6764f8519a1b5f2a0))
* allow users to edit questions ([e8a15dd](https://github.com/drodil/backstage-plugin-qeta/commit/e8a15dd91239b650b3f3c8211ef3a3c14db760b7)), closes [#5](https://github.com/drodil/backstage-plugin-qeta/issues/5)


### [0.1.23](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.22...v0.1.23) (2022-12-29)


### Bug Fixes

* change search collator to use database ([4b08cb3](https://github.com/drodil/backstage-plugin-qeta/commit/4b08cb31fb3bb94f96038c91e06040a931b0b9c1))

### [0.1.22](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.21...v0.1.22) (2022-12-28)


### Features

* format username from entity reference ([5b81ddb](https://github.com/drodil/backstage-plugin-qeta/commit/5b81ddbae37ea9a5afa3b5e9f7d77bbedc0d485f)), closes [#14](https://github.com/drodil/backstage-plugin-qeta/issues/14)


### Bug Fixes

* move catalog api to dev/index ([38c34f9](https://github.com/drodil/backstage-plugin-qeta/commit/38c34f9cac64f0a9bbd2357463d83e241e9244f8)), closes [#16](https://github.com/drodil/backstage-plugin-qeta/issues/16)

### [0.1.21](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.18...v0.1.21) (2022-12-28)


### Bug Fixes

* remove catalog api completely from released version ([61ed863](https://github.com/drodil/backstage-plugin-qeta/commit/61ed8632e88912837ddbe91e736e2c4b128e2425))
* duplicate catalog api for plugin users ([2ce629b](https://github.com/drodil/backstage-plugin-qeta/commit/2ce629ba777f9ea98301e0f14ee82086ca747912))
* yarn.lock ([639d2ab](https://github.com/drodil/backstage-plugin-qeta/commit/639d2abfb8a762c663bf767f7e7d160d12eff6f1))

### Features

* allow selecting components for questions ([7c2ca39](https://github.com/drodil/backstage-plugin-qeta/commit/7c2ca398a61333433630a80753e3df64de1f2102)), closes [#12](https://github.com/drodil/backstage-plugin-qeta/issues/12)


### [0.1.18](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.17...v0.1.18) (2022-12-27)


### Features

* allow using postgresql in local dev ([92c9651](https://github.com/drodil/backstage-plugin-qeta/commit/92c96511ad2524376961db687094eca0a46838b5))

### [0.1.17](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.16...v0.1.17) (2022-12-27)


### Bug Fixes

* remove docker from tests ([c658f60](https://github.com/drodil/backstage-plugin-qeta/commit/c658f60f6cf473dfa121fe29c06dc07c3e7db658))

### [0.1.16](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.15...v0.1.16) (2022-12-27)


### Features

* add button to ask when there is no questions ([1aa4d75](https://github.com/drodil/backstage-plugin-qeta/commit/1aa4d75fa5288fe8fe6954baddc5981a252cb16a))
* add question highlight lists to front page ([00f32c5](https://github.com/drodil/backstage-plugin-qeta/commit/00f32c5c85ef2fbc973f41770926cbdd42774405)), closes [#3](https://github.com/drodil/backstage-plugin-qeta/issues/3)


### Bug Fixes

* correct answer fetching in the questions list ([7bd3daf](https://github.com/drodil/backstage-plugin-qeta/commit/7bd3daf4edc81c8ef4d88c3ec2976dd5337b1d85))

### [0.1.15](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.14...v0.1.15) (2022-12-27)


### Features

* add tags page to show all used tags ([b3a0b6f](https://github.com/drodil/backstage-plugin-qeta/commit/b3a0b6f3fcd8cd4b1da9833361455f68c49675c5)), closes [#2](https://github.com/drodil/backstage-plugin-qeta/issues/2)
* initial filter panel for questions page ([3852032](https://github.com/drodil/backstage-plugin-qeta/commit/385203275802b65e8ee9c38ddfdc915326ef0135)), closes [#4](https://github.com/drodil/backstage-plugin-qeta/issues/4)


### Bug Fixes

* follow palette colors in markdown editor ([9756685](https://github.com/drodil/backstage-plugin-qeta/commit/9756685f584f549948571369bdeb6dd296b1fa8e))

### [0.1.14](https://github.com/drodil/backstage-plugin-qeta/compare/v0.1.13...v0.1.14) (2022-12-23)


### Features

* add standard-release for version bumping ([a4c802e](https://github.com/drodil/backstage-plugin-qeta/commit/a4c802e1a5fdf643b1bd8643ed8f38a161548ea5)), closes [#11](https://github.com/drodil/backstage-plugin-qeta/issues/11)
* automatic release creation when tag pushed ([59a84a0](https://github.com/drodil/backstage-plugin-qeta/commit/59a84a08af0c0aa43cb9380d8fc22a4b67801442))
* use version bump in release workflow ([0773dfc](https://github.com/drodil/backstage-plugin-qeta/commit/0773dfca0e3c3ebfdefa68a25ce6e21c30ddcce3)), closes [#11](https://github.com/drodil/backstage-plugin-qeta/issues/11)


### Bug Fixes

* add missing trigger to bump ([efc383d](https://github.com/drodil/backstage-plugin-qeta/commit/efc383dda3daaa69e4c99b3affbcfd15b764eb7f))
* checkout in release pipeline to fetch tags ([6fdcf51](https://github.com/drodil/backstage-plugin-qeta/commit/6fdcf51ab91b7fd616f25c34b83ccce4747bc484))
* move version bump to own action ([0154d87](https://github.com/drodil/backstage-plugin-qeta/commit/0154d870c1601e1c9c0923d97521d60f6e861465))
* run lint and tests before bump ([a3ee727](https://github.com/drodil/backstage-plugin-qeta/commit/a3ee72731eb7c28584aba182b2495695d472d727))
* try to fix navigation once again ([46aeeb1](https://github.com/drodil/backstage-plugin-qeta/commit/46aeeb1b1cc2a51cd80cd77f7ef760ee7e866e97))
