import {Avatar, Button} from "./ui";
import {Lucide, Simple} from "./icons";

export default () => {
    return (
        <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
            <div className="flex flex-row items-center gap-4">
                {/*<Avatar src="/avatar.webp" alt="profile-picture">*/}
                {/*  <Lucide.IconUser className="size-2/3" />*/}
                {/*</Avatar>*/}
                <img src="/avatar.webp" alt="profile-picture" className="w-20 pb-5"/>

                <div className="flex flex-col items-start gap-2">
                    <h1 className="font-medium text-lg lg:text-xl">陈昱行(Chen Yuhang)</h1>
                    <h2 className="font-medium text-2xl lg:text-3xl">WebGIS、OSGeo.</h2>
                </div>
            </div>

            <div className="py-2">
                AKA. yuhangch have many hobbies but are not particularly skilled in any of them: 🏀/⚽️/🏸/🎮. <br/>
                As a child, I was passionate about history and planned to pursue a career related to it. <br/>
                I work on tasks related to maps and have some knowledge of the web tech stack (though not
                extensively). <br/>
                I have a fondness for the pre-internet era and enjoy old-school web styles.
            </div>

            <div className="flex self-stretch justify-end">
                <Button as="a" href="https://github.com/yuhangch" target="_blank" aria-label="GitHub">
                    <Simple.IconGitHub/>
                    GitHub
                </Button>
            </div>
        </div>
    );
};
