"use strict";(self.webpackChunkkraken_ci_website=self.webpackChunkkraken_ci_website||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"commenting-test-results","metadata":{"permalink":"/blog/commenting-test-results","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2022-01-24-commenting-test-results.mdx","source":"@site/blog/2022-01-24-commenting-test-results.mdx","title":"Commenting Test Results","description":"This time not about autoscaling or other cloud feature. This time we","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"git","permalink":"/blog/tags/git"},{"label":"webhooks","permalink":"/blog/tags/webhooks"}],"readingTime":0.71,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","key":"mike"}],"frontMatter":{"slug":"commenting-test-results","title":"Commenting Test Results","authors":"mike","tags":["kraken","git","webhooks"]},"nextItem":{"title":"Autoscaling with Kubernetes","permalink":"/blog/autoscaling-with-kubernetes"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\nimport Image from \'@theme/IdealImage\';\\n\\n\\nThis time not about autoscaling or other cloud feature. This time we\\nare coming back to the core area of Kraken: testing. Today\'s [0.854\\nrelease](https://github.com/Kraken-CI/kraken/releases/tag/v0.854)\\nintroduces test results commenting.\\n\\nMore information about commenting is below.\\n\\n\x3c!--truncate--\x3e\\n\\n[Test results comments](/docs/test-results-basics#comments) feature allows\\nfor adding sticky comments to test case results. When you spot a new\\nfailure, you may add a comment stating, e.g. the reason for the failure\\nor link to a bug in a bug tracker. If the failure persists in the\\nsubsequent test runs, the added comment is still presented next to\\nthe new result. If new facts about the failure are revealed, you may\\nextend the comment.\\n\\nThere is also a state of the comment. More information about these\\ndetails can be found in the [docs page](/docs/test-results-basics#comments)\\nof the results comments feature."},{"id":"autoscaling-with-kubernetes","metadata":{"permalink":"/blog/autoscaling-with-kubernetes","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-12-30-autoscaling-with-kubernetes.mdx","source":"@site/blog/2021-12-30-autoscaling-with-kubernetes.mdx","title":"Autoscaling with Kubernetes","description":"Previous Kraken\'s release introduced a new installation method into Kubernetes using Helm chart.","date":"2021-12-30T00:00:00.000Z","formattedDate":"December 30, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"git","permalink":"/blog/tags/git"},{"label":"webhooks","permalink":"/blog/tags/webhooks"}],"readingTime":0.39,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"autoscaling-with-kubernetes","title":"Autoscaling with Kubernetes","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","git","webhooks"]},"prevItem":{"title":"Commenting Test Results","permalink":"/blog/commenting-test-results"},"nextItem":{"title":"Installation on Kubernetes","permalink":"/blog/installation-to-kubernetes"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nPrevious Kraken\'s release introduced a new installation method into Kubernetes using Helm chart.\\nToday\'s [0.813 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.813)\\nallows for autoscaling on Kubernetes.\\n\\nMore information about Kraken on Kubernetes is below.\\n\\n\x3c!--truncate--\x3e\\n\\nAutoscaling [docs](/docs/autoscale-in-cloud) have been\\nupdated and now includes details about Kubernetes.\\n\\nAdditionally, a new [guide for Kubernetes](/docs/guide-kubernetes) has\\nbeen prepared.  It presents, step by step, how to deploy Kraken to\\nKubernetes cluster, configure autoscaling on Kubernetes and how to run\\nthe first job there."},{"id":"installation-to-kubernetes","metadata":{"permalink":"/blog/installation-to-kubernetes","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-12-09-installation-to-kubernetes.mdx","source":"@site/blog/2021-12-09-installation-to-kubernetes.mdx","title":"Installation on Kubernetes","description":"The latest release 0.788 release","date":"2021-12-09T00:00:00.000Z","formattedDate":"December 9, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"git","permalink":"/blog/tags/git"},{"label":"webhooks","permalink":"/blog/tags/webhooks"}],"readingTime":0.55,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"installation-to-kubernetes","title":"Installation on Kubernetes","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","git","webhooks"]},"prevItem":{"title":"Autoscaling with Kubernetes","permalink":"/blog/autoscaling-with-kubernetes"},"nextItem":{"title":"Webhooks for GitLab and Gitea","permalink":"/blog/webhooks-for-gitlab-and-gitea"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe latest release [0.788 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.788)\\nbrings support for Kraken installation into Kubernetes using Helm chart.\\n\\n[Helm installation](/docs/install-helm) guide shows how to do this.\\n\\nFull information about current and past Helm chart releases can be\\nfound on: https://artifacthub.io/packages/helm/kraken-ci/kraken-ci.\\n\\nMore information about ArtiactHub is below.\\n\\n\x3c!--truncate--\x3e\\n\\n<Screen img=\\"artifacthub-io.png\\" />\\n\\nThere are presented install and upgrade steps. The templates of the\\ncharts are available, so it is possible to check what and how they\\nwill be installed in a Kubernetes cluster. There are also shown\\nconfiguration fields with default values.\\n\\nBesides that, the history of releases is provided, and a list of the\\nreferenced container images in pod deployments."},{"id":"webhooks-for-gitlab-and-gitea","metadata":{"permalink":"/blog/webhooks-for-gitlab-and-gitea","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-11-12-webhooks-for-gitlab-and-gitea.mdx","source":"@site/blog/2021-11-12-webhooks-for-gitlab-and-gitea.mdx","title":"Webhooks for GitLab and Gitea","description":"The latest release 0.753 release","date":"2021-11-12T00:00:00.000Z","formattedDate":"November 12, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"git","permalink":"/blog/tags/git"},{"label":"webhooks","permalink":"/blog/tags/webhooks"}],"readingTime":0.905,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"webhooks-for-gitlab-and-gitea","title":"Webhooks for GitLab and Gitea","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","git","webhooks"]},"prevItem":{"title":"Installation on Kubernetes","permalink":"/blog/installation-to-kubernetes"},"nextItem":{"title":"Autoscaling with Azure and AWS ECS","permalink":"/blog/autoscaling-with-azure-and-aws-ecs"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe latest release [0.753 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.753)\\nbrings support for webhooks for 2 new Git hosting services: [GitLab](https://gitlab.org)\\nand [Gitea](https://gitea.io/).\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n[Webhooks Guide](/docs/guide-webhooks) shows how to use webhooks,\\nnow in GitLab, Gitea and GitHub.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nWebhooks allows for triggering a flow in a branch. The webhook may\\ncome now from 3 Git hosting services: GitLab, Gitea and GitHub.  There\\nare two kinds of webhook events supported: push and pull request (in\\nthe case of GitHub and Gitea) and merge request (in the case of\\nGitLab). A push even to a given branch causes a CI flow to be\\nstarted. If this is a pull request or a merge request, then a DEV flow\\nis started. If a workflow schema checks out sources from this\\nrepository, a version indicated in the push or the pull/merge request is\\nchecked out.\\n\\nThe [Webhook Guide](/docs/guide-webhooks) shows how to configure\\nwebhooks in a project, and then how to configure a Git hosting\\nservice. In the end, checking out the repository in the workflow\\nschema is presented."},{"id":"autoscaling-with-azure-and-aws-ecs","metadata":{"permalink":"/blog/autoscaling-with-azure-and-aws-ecs","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-10-24-autoscaling-with-azure-and-aws-ecs.mdx","source":"@site/blog/2021-10-24-autoscaling-with-azure-and-aws-ecs.mdx","title":"Autoscaling with Azure and AWS ECS","description":"The latest release 0.748 release","date":"2021-10-24T00:00:00.000Z","formattedDate":"October 24, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":0.775,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"autoscaling-with-azure-and-aws-ecs","title":"Autoscaling with Azure and AWS ECS","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","cloud"]},"prevItem":{"title":"Webhooks for GitLab and Gitea","permalink":"/blog/webhooks-for-gitlab-and-gitea"},"nextItem":{"title":"Testing Frameworks","permalink":"/blog/testing-frameworks"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe latest release [0.748 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.748)\\nbrings a new public cloud in autoscaling features: Azure and AWS ECS.\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n[Autoscaling Guide](/docs/guide-autoscale) shows how to use\\nautoscaling with Azure VMs and AWS ECS.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nMaintaining a fixed number of machines for Kraken CI can be costly. If\\nthere is no high traffic of builds, then some machines sit idle and\\nwaste power. The solution to this problem is autoscaling ie. spawning\\nmachines with Kraken Agents dynamically depending on the current needs\\nin the Kraken CI. If there is submitted a new flow with many building\\nor testing jobs, then new machines are spawned. When the flow\\ncompletes, machines are terminated and no costs are incurred.\\n\\nThe [Autoscaling Guide](/docs/guide-autoscale) shows how to configure\\naccess to Azure, then how to configure parameters and behaviour of\\nspawned machines. In the end, the usage in job definitions is\\npresented."},{"id":"testing-frameworks","metadata":{"permalink":"/blog/testing-frameworks","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-08-06-testing-frameworks.mdx","source":"@site/blog/2021-08-06-testing-frameworks.mdx","title":"Testing Frameworks","description":"There have been added three articles in the Kraken\'s documentation","date":"2021-08-06T00:00:00.000Z","formattedDate":"August 6, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":0.8,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"testing-frameworks","title":"Testing Frameworks","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","cloud"]},"prevItem":{"title":"Autoscaling with Azure and AWS ECS","permalink":"/blog/autoscaling-with-azure-and-aws-ecs"},"nextItem":{"title":"Autoscaling with AWS","permalink":"/blog/autoscaling-with-aws"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\nThere have been added three articles in the Kraken\'s documentation\\nabout integration of testing frameworks with Kraken CI:\\n\\n- [JUnit](/docs/tf-junit)\\n- [Pytest](/docs/tf-pytest)\\n- [RobotFramework](/docs/tf-robotframework)\\n\\nThe latest release [0.698\\nrelease](https://github.com/Kraken-CI/kraken/releases/tag/v0.698)\\nbrings also a new feature: collecting, storing and presenting custom\\ngenerated reports in e.g. HTML.\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n\x3c!--truncate--\x3e\\n\\n\\n### Testing Frameworks\\n\\nThe articles about testing frameworks shows how to use well known\\nframeworks like [JUnit](/docs/tf-junit), [Pytest](/docs/tf-pytest) and\\n[RobotFramework](/docs/tf-robotframework) inside Kraken CI. There are\\npresented stage workflow schemas with steps that:\\n\\n1. execute the tests using particular framework\\n1. report results to Kraken server\\n1. store generated custom reports on Kraken server\\n\\n### Custom Reports\\n\\nThe latest release [0.698\\nrelease](https://github.com/Kraken-CI/kraken/releases/tag/v0.698)\\nallows now for storing and presenting custom reports in e.g. HTML format.\\nThe are available along current generic test case results page.\\n\\nMore details about step for storing reports can be found in [the\\ndocs](/docs/schema#artifacts) and example usage on [RobotFramework\\nexample](/docs/tf-robotframework)."},{"id":"autoscaling-with-aws","metadata":{"permalink":"/blog/autoscaling-with-aws","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-07-20-autoscaling-with-aws.mdx","source":"@site/blog/2021-07-20-autoscaling-with-aws.mdx","title":"Autoscaling with AWS","description":"The latest release 0.687 release","date":"2021-07-20T00:00:00.000Z","formattedDate":"July 20, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":0.725,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"autoscaling-with-aws","title":"Autoscaling with AWS","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","cloud"]},"prevItem":{"title":"Testing Frameworks","permalink":"/blog/testing-frameworks"},"nextItem":{"title":"Kraken Release 0.645","permalink":"/blog/kraken-release-0-645"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe latest release [0.687 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.687)\\nbrings a stabilization to autoscaling feature.\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n[Autoscaling Guide](/docs/guide-autoscale) shows how to use autoscaling with AWS.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nMaintaining a fixed number of machines for Kraken CI can be costly. If\\nthere is no high traffic of builds, then some machines sit idle and\\nwaste power. The solution to this problem is autoscaling ie. spawning\\nmachines with Kraken Agents dynamically depending on the current needs\\nin the Kraken CI. If there is submitted a new flow with many building\\nor testing jobs, then new machines are spawned. When the flow\\ncompletes, machines are terminated and no costs are incurred.\\n\\nThe [Autoscaling Guide](/docs/guide-autoscale) shows how to configure\\naccess to AWS, then how to configure parameters and behaviour of\\nspawned machines. In the end, the usage in job definitions is\\npresented."},{"id":"kraken-release-0-645","metadata":{"permalink":"/blog/kraken-release-0-645","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-07-04-kraken-release-0-645.mdx","source":"@site/blog/2021-07-04-kraken-release-0-645.mdx","title":"Kraken Release 0.645","description":"The 0.645 release contains several new features and improvements and some fixes.","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.11,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"kraken-release-0-645","title":"Kraken Release 0.645","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","release"]},"prevItem":{"title":"Autoscaling with AWS","permalink":"/blog/autoscaling-with-aws"},"nextItem":{"title":"Kraken Release 0.557","permalink":"/blog/kraken-release-0-557"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe [0.645 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.645) contains several new features and improvements and some fixes.\\nThe most noteworthy changes are:\\n\\n- added background steps\\n- added support for Rocky Linux\\n- replaced Celery with RQ for background tasks\\n- upgraded Angular and PrimeNG to 12\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n\x3c!--truncate--\x3e\\n\\n## The list of changes\\n\\nThe complete list of changes looks as follows.\\n\\nFeatures & improvements:\\n\\n\\n- added more details about RQ jobs on the diagnostics page\\n- added changing name of branch in a repo\\n- when run is being started then stage schema is refreshed from repo\\n- added button for checking email and AWS settings\\n- converted timestamps columns to be with timezone in Postgresql schema\\n- converted all char(n) columns in db to text\\n- added doing db backup during deployment\\n\\nFixes:\\n\\n- fixed deleting dangling agents with no AWS instance\\n- added db rollback in watchdog in case of exception\\n- improved checking agents vm to destroy\\n- pytest tool: added check if collecting tests failed\\n- fixed counting available agents\\n- added detecting jobs with no agent and spawning them\\n- improved creating system records\\n- improved checking args to agent\\n- improved pulling git repo in git tool\\n\\n\\nMore details about background steps can be found in [the documentation](/docs/schema#shell)."},{"id":"kraken-release-0-557","metadata":{"permalink":"/blog/kraken-release-0-557","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-05-227-kraken-release-0-557.mdx","source":"@site/blog/2021-05-227-kraken-release-0-557.mdx","title":"Kraken Release 0.557","description":"The 0.557 release contains several new features and improvements and some fixes.","date":"2021-05-22T00:00:00.000Z","formattedDate":"May 22, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.37,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"kraken-release-0-557","title":"Kraken Release 0.557","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","release"]},"prevItem":{"title":"Kraken Release 0.645","permalink":"/blog/kraken-release-0-645"},"nextItem":{"title":"Kraken Release 0.492","permalink":"/blog/kraken-release-0-492"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe [0.557 release](https://github.com/Kraken-CI/kraken/releases/tag/v0.557) contains several new features and improvements and some fixes.\\nThe most noteworthy changes are:\\n\\n- improved diagnostics capabilities, i.e. browsing internal logs from Kraken services\\n- integration with AWS EC2 - this is in beta state\\n\\n[Quick Start](/docs/quick-start) guide shows how to install Kraken CI.\\n\\n\x3c!--truncate--\x3e\\n\\n## The list of changes\\n\\nThe complete list of changes looks as follows.\\n\\nFeatures & improvements:\\n\\n- #105 added browsing Kraken logs in diagnostics page\\n- added errors number indicator in the top menu bar\\n- added integration with AWS EC2 - spawning VMs for jobs (beta/preview)\\n- added loading status with a spinner to submit, refresh and other buttons\\n- added interpolating variables in system and agents_group names in a workflow schema\\n- added adding kraken user to docker group and configuring sudo in agent installer\\n- kraken workflow: switched to AWS agents in build and static analysis jobs\\n- added codebeat badge to readme\\n\\nFixes:\\n\\n- fixed preparing repo changes data\\n- fixed counting agents in agents group\\n- fixed updating schema_from_repo_enabled\\n- fixed colors of top menu items\\n\\n\\n## Improved diagnostics\\n\\n### Logs\\n\\nThe diagnostics page accessible from the top menu bar got a\\nnew feature: browser of Kraken services logs. The second tab on the\\ndiagnostics page, called `Logs`, now contains filters and a\\nlogs window.\\n\\n<Screen img=\\"screen-diagnostics-logs.png\\" />\\n\\nThe list of select buttons at the top allows selecting Kraken services\\nlike server/api, celery or watchdog. Below, there is a dropbox with\\nlog level selection, from info level to error level. When the celery\\nservice is selected, selecting task type from the dropbox list is also\\npossible.\\n\\n### Error Indicator\\n\\nTo make it easier to reach logs with some problems, there have been\\nadded an error indicator in the top menu bar.\\n\\n<Screen img=\\"screen-error-indicator.png\\" />\\n\\nIt is visible on all Kraken pages. If it is greater than 0, it is\\ndisplayed in reddish color to get user attention. The count indicates\\nthe number of errors in Kraken services logs in the last hour.\\nWhen clicked, it leads to the logs page.\\n\\n## Preliminary AWS EC2 integration\\n\\nThe second, quite exciting feature, is integration with AWS EC2. The\\nintegration allows for autoscaling Kraken\'s agents. If no jobs are\\nwaiting for execution, then there are no waitng agents on EC2\\nVMs. When they appear, new VMs in EC2 are spawned immediately. If the\\nnumber of jobs grows, the number of VMs can grow as well. There is\\npossible to set a limit for the number of VMs. VMs can be reused or\\nreclaimed after a given period of idle time or after an indicated\\nnumber of executed jobs.\\n\\nThe configuration in Kraken for AWS EC2 integration is 1) in global\\nsettings (credentials) and 2) on the agent\'s group page.\\n\\nMore details will be presented when the feature is completed."},{"id":"kraken-release-0-492","metadata":{"permalink":"/blog/kraken-release-0-492","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-24-kraken-release-0-492.mdx","source":"@site/blog/2021-04-24-kraken-release-0-492.mdx","title":"Kraken Release 0.492","description":"The 0.492 release contains one feature:","date":"2021-04-24T00:00:00.000Z","formattedDate":"April 24, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.545,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"kraken-release-0-492","title":"Kraken Release 0.492","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","release"]},"prevItem":{"title":"Kraken Release 0.557","permalink":"/blog/kraken-release-0-557"},"nextItem":{"title":"Kraken\'s Code Quality","permalink":"/blog/kraken-code-quality"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\nThe 0.492 release contains one feature:\\n\\n- status badges\\n\\nand two fixes:\\n\\n- fixed collecting commits info in case there are deleted files\\n- fixed returning tests results counts - mistake during code cleanup\\n\\n\x3c!--truncate--\x3e\\n\\nThe status badges indicate the current quality of a branch of a project.\\n\\n<Screen img=\\"kraken-badges.png\\" />\\n\\nThere are three types of badges. They are indicating:\\n\\n- building state (if there are no errors)\\n- tests results with fixes and regression counts\\n- issues count with a count of newly discovered issues\\n\\nLinks to the badges are available on a branch management page, in the Status Badge tab:\\n\\n\\n<Screen img=\\"screen-branch-mgmt-badges.png\\" />"},{"id":"kraken-code-quality","metadata":{"permalink":"/blog/kraken-code-quality","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-22-kraken-code-quality.mdx","source":"@site/blog/2021-04-22-kraken-code-quality.mdx","title":"Kraken\'s Code Quality","description":"The last week brings to Kraken\'s source code many quality","date":"2021-04-22T00:00:00.000Z","formattedDate":"April 22, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"code","permalink":"/blog/tags/code"},{"label":"quality","permalink":"/blog/tags/quality"}],"readingTime":0.315,"truncated":false,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"kraken-code-quality","title":"Kraken\'s Code Quality","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","code","quality"]},"prevItem":{"title":"Kraken Release 0.492","permalink":"/blog/kraken-release-0-492"},"nextItem":{"title":"Kraken Release 0.475","permalink":"/blog/kraken-release-0-475"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\nThe last week brings to Kraken\'s source code many quality\\nimprovements. Services like\\n[LGTM](https://lgtm.com/projects/g/Kraken-CI/kraken/) and\\n[Codacy](https://app.codacy.com/gh/Kraken-CI/kraken/dashboard) help\\nfixing code smells but also serious problems. So during that week in\\nKraken\'s repository, many commits have landed that refactor the\\ncode, fix issues and do code cleanup.\\n\\nThanks to all these changes, the project earned these quality badges:\\n\\n<Screen img=\\"quality-badges.png\\" />"},{"id":"kraken-release-0-475","metadata":{"permalink":"/blog/kraken-release-0-475","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2021-04-12-kraken-release-0-475.mdx","source":"@site/blog/2021-04-12-kraken-release-0-475.mdx","title":"Kraken Release 0.475","description":"The 0.475 release contains three main features:","date":"2021-04-12T00:00:00.000Z","formattedDate":"April 12, 2021","tags":[{"label":"kraken","permalink":"/blog/tags/kraken"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.24,"truncated":true,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"kraken-release-0-475","title":"Kraken Release 0.475","author":"Michal Nowikowski","author_title":"Kraken Founder. I\u2019m software engineer focused on full-stack programming and improving software processes.","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["kraken","release"]},"prevItem":{"title":"Kraken\'s Code Quality","permalink":"/blog/kraken-code-quality"},"nextItem":{"title":"Hello World!","permalink":"/blog/hello-world"}},"content":"import Screen from \\"../docs/common.jsx\\"\\n\\n\\nThe 0.475 release contains three main features:\\n\\n- presenting **the status of the last flows** on the Kraken main page\\n- presenting **changes in Git repository** that got into a given flow\\n- presenting **step duration** on Run page, on the selected job, on Steps tab\\n\\n\x3c!--truncate--\x3e\\n\\n## The last flows status on the Kraken main page\\n\\nThe Kraken main page presents a list of branches for each\\nproject.  On the Demo project shown below, there are multiple\\nbranches. Now under each branch, there are exposed the last completed\\nflow and the last in-progress flow. On the side, there is added a time\\nin grey how long ago the flow was completed or created.\\n\\n<Screen img=\\"screen-main-last-flows.png\\" />\\n\\n\\n## Git repo changes on a flow page\\n\\nThe flow can be triggered by a push to Github PR or a Git branch. Now\\nthe flow page presents information about these Git changes.\\n\\nIf a push to Github PR triggered a flow, then it is presented\\nin **Repo Changes** tab on the flow page.\\n\\n<Screen img=\\"screen-flow-repo-trigger.png\\" />\\n\\nIf a stage has a repository defined in a trigger section, then the changes\\ndetected since previous flow are presented on another **Repo Changes**\\ntab for the selected stage.\\n\\n<Screen img=\\"screen-flow-run-repo-changes.png\\" />\\n\\n\\n## Step duration on Run page\\n\\nThe run page show steps\' status for the selected job on the Steps\\ntab. Now besides the current state of a step, there is included its\\nduration in seconds.\\n\\n<Screen img=\\"screen-run-step-duration.png\\" />"},{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","editUrl":"https://github.com/kraken-ci/website/edit/master/blog/blog/2020-07-26-hello-world.md","source":"@site/blog/2020-07-26-hello-world.md","title":"Hello World!","description":"Welcome to Kraken CI blog. This is the first post on this blog.","date":"2020-07-26T00:00:00.000Z","formattedDate":"July 26, 2020","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"kraken","permalink":"/blog/tags/kraken"}],"readingTime":0.065,"truncated":false,"authors":[{"name":"Michal Nowikowski","title":"Kraken Founder","url":"https://www.linkedin.com/in/godfryd","imageURL":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4"}],"frontMatter":{"slug":"hello-world","title":"Hello World!","author":"Michal Nowikowski","author_title":"Kraken Founder","author_url":"https://www.linkedin.com/in/godfryd","author_image_url":"https://avatars1.githubusercontent.com/u/176567?s=460&u=4ade22771af9569be24b20278d24ef60da6eb0bb&v=4","tags":["hello","kraken"]},"prevItem":{"title":"Kraken Release 0.475","permalink":"/blog/kraken-release-0-475"}},"content":"Welcome to Kraken CI blog. This is the first post on this blog."}]}')}}]);