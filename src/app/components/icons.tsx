import {
  Icon,
  IconBallFootball,
  IconBuildingBank,
  IconBuildingStore,
  IconCode,
  IconCrane,
  IconHeadset,
  IconInputAi,
  IconMessages,
  IconProps,
  IconSchool,
  IconServer,
  IconSettings2,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const icons: {
  [key: string]: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
} = {
  "ki-beratung": IconInputAi,
  consulting: IconMessages,
  development: IconCode,
  managed: IconServer,
  support: IconHeadset,
  training: IconSchool,
  bau: IconCrane,
  behoerden: IconBuildingBank,
  handel: IconBuildingStore,
  produktion: IconSettings2,
  sport: IconBallFootball,
};
