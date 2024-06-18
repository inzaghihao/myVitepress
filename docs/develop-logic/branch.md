### 环境对应分支

- dev环境 — origin/dev （备用）
- test环境 — origin/release-test
- uat环境 — origin/release-uat （现与test 环境共用一套接口）
- 生产环境 — origin/release-prod
- 生产bug修复分支 — release-hotfix
- 主分支 — origin/master
- 备份主分支 — origin/ml-master (原当家使用的主分支，现统一切换到master分支，原ml-master 分支做备份)

> 环境分支可以重建但不要删除，否则会影响Jenkins构建

### 环境分支开发

- origin/dev   develop权限可以合并和推送
- origin/release-test 和 origin/release-uat 不可推送、master权限可以合并，项目开发完成后提测时合并
- origin/release-uat 不可推送、master权限可以合并，项目测试完成后，上uat时，从开发分支提交MR给master权限的项目负责人
- origin/release-hotfix 不可推送、master权限可以合并，项目测试完成后，上仿真时，从开发分支提交MR给master权限的项目负责人
- origin/release-prod 不可推送、master权限可以合并，项目测试完成后，上生产时，从开发分支提交MR给master权限的项目负责人，统一发布
- origin/master 不可推送、master权限可以合并，项目生产测试完成后，由版本管理者合入master，并新建对应的版本tags

> 环境分支由开发分支merge，不可直接push

### 开发分支

> 以’feature-‘或‘fix-’或’merge-‘前缀加项目名称从master主分支新建分支进行开发，往对应环境分支合并

### 开发中的分支流程

#### 基于master拉取开发分支（开发人员操作）

- 新项目以feature-项目标识命名，建议全英文 (例：feature-activity)
- 生产bug修复使用release-hotfix标识命名，建议全英文 
- 解决冲突分支使用merge-项目标识命名，建议全英文

#### 开发分支反向master分支（开发人员操作）

- 从master合并到需要继续使用开发分支
- 确定不再使用的分支请删除
- 每次发布之后需要反向对应发布的工程

#### 在gitlab中从开发分支提交MR到release-test（开发人员操作）

- 提测时操作
- 提交给master权限的项目负责人

#### 在gitlab中从开发分支提交MR到release-uat（开发人员操作）

- 同上

#### 在gitlab中从开发分支提交MR到release-prod（开发人员操作）

- 同上

#### 解决冲突（开发人员操作）

- 当提交MR后发现有冲突无法合并时操作
- 关闭已提交的MR
- 基于目标分支新建 merge-项目标识 分支
- 在本地merge 开发分支 to 新建的 merge-项目标识 分支
- 处理冲突
- push merge-项目标识 分支
- merge merge-项目标识 分支 to 目标分支
- 删除 merge-项目标识 分支

#### 合并代码进环境分支（master权限的项目负责人操作）

- 审阅MR
- 不允许自己合并自己的代码，项目负责人的代码由其他master权限的人合入

#### 在gitlab中从release-prod/release-hotfix合并到master（发布管理人员操作）

- 线上发布完成后在gitlab中将release-prod分支合并入master

#### 基于master新建版本tag（发布管理人员操作）

- 流程h完成后操作
- tag命名规范：v发布日期，如：v2024-06-05

#### 重建环境分支（发布管理人员操作）

- 流程h完成后操作
- 删除dev、release-test、release-uat、release-prod分支，然后基于master重新拉取这些分支
