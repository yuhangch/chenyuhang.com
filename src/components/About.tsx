import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/avatar.webp" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">陈昱行(Chen Yuhang)</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">WebGIS、OSGeo.</h2>
        </div>
      </div>

      <div>

          AKA. 刚和 /yuhangch

          爱好很多，但都玩不好 /🏀/⚽️/🏸/🎮/

          小时候爱好历史，计划长大做相关的事情，现在只能看视频、讲座解馋。

          做些跟地图相关的工作，Web 技术栈都会一点 （但不多

          喜欢前互联网时代，喜欢看 old school 的风格。
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://github.com/yuhangch" target="_blank" aria-label="GitHub">
          <Simple.IconGitHub />
          GitHub
        </Button>
      </div>
    </div>
  );
};
