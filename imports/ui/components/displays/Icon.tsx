import React from "react";
import {
  HiThumbUp,
  HiThumbDown,
  HiAcademicCap,
  HiAdjustments,
  HiArrowsExpand,
  HiBell,
  HiBookOpen,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiCode,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDeviceTablet,
  HiDotsCircleHorizontal,
  HiDotsHorizontal,
  HiDotsVertical,
  HiEmojiHappy,
  HiEmojiSad,
  HiExclamation,
  HiExclamationCircle,
  HiEye,
  HiEyeOff,
  HiHeart,
  HiHome,
  HiInformationCircle,
  HiLocationMarker,
  HiLockClosed,
  HiMail,
  HiMailOpen,
  HiMap,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineAcademicCap,
  HiOutlineAdjustments,
  HiOutlineArrowsExpand,
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDotsVertical,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
  HiOutlineExclamation,
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLocationMarker,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlineMap,
  HiOutlinePaperAirplane,
  HiOutlinePencil,
  HiOutlinePencilAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
  HiOutlineStar,
  HiOutlineTerminal,
  HiOutlineTrash,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiPaperAirplane,
  HiPencil,
  HiPencilAlt,
  HiPuzzle,
  HiQuestionMarkCircle,
  HiSortAscending,
  HiSortDescending,
  HiStar,
  HiTerminal,
  HiTrash,
  HiUser,
  HiUserCircle,
  HiX,
  HiXCircle,
} from "react-icons/hi";

import { FaSave, FaRegSave } from "react-icons/fa";
MdSignalCellular1Bar;

import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

import {
  MdSignalCellular1Bar,
  MdSignalCellular3Bar,
  MdSignalCellular4Bar,
} from "react-icons/md";

export type IconType =
  | "easy"
  | "intermediate"
  | "hard"
  | "check"
  | "check-fill"
  | "sort-ascending"
  | "sort-descending"
  | "code"
  | "expand"
  | "dots"
  | "dots-fill"
  | "dots-vertical"
  | "view"
  | "no-view"
  | "bookmark"
  | "bell"
  | "info"
  | "question"
  | "warning"
  | "warning-triangle"
  | "close"
  | "heart"
  | "lock"
  | "chevron-right"
  | "chevron-left"
  | "chevron-up"
  | "chevron-down"
  | "edit"
  | "pen"
  | "book"
  | "settings"
  | "academy"
  | "home"
  | "user"
  | "user-fill"
  | "save"
  | "star"
  | "terminal"
  | "mail"
  | "mail-open"
  | "send"
  | "map"
  | "location"
  | "trash"
  | "desktop"
  | "tablet"
  | "thumbs-up"
  | "thumbs-down"
  | "mobile"
  | "emoji-sad"
  | "emoji-happy";

export interface IconProps {
  icon: IconType;
  color?: "blue" | "slate" | "inherit";
  outline?: boolean;
  className?: string;
  size?: number | string;
}

export default function Icon({
  icon,
  color = "inherit",
  outline = false,
  className = "",
  size = "",
}: IconProps) {
  const CLASSNAME =
    color === "inherit"
      ? `text-inherit ${className}`
      : `text-${color}-600 ${className}`;
  switch (icon) {
    case "easy":
      if (outline)
        return <MdSignalCellular1Bar className={CLASSNAME} size={size} />;
      return <MdSignalCellular1Bar className={CLASSNAME} size={size} />;
    case "intermediate":
      if (outline)
        return <MdSignalCellular3Bar className={CLASSNAME} size={size} />;
      return <MdSignalCellular3Bar className={CLASSNAME} size={size} />;
    case "hard":
      if (outline)
        return <MdSignalCellular4Bar className={CLASSNAME} size={size} />;
      return <MdSignalCellular4Bar className={CLASSNAME} size={size} />;
    case "check":
      if (outline)
        return <HiOutlineCheckCircle className={CLASSNAME} size={size} />;
      return <HiCheck className={CLASSNAME} size={size} />;
    case "check-fill":
      if (outline)
        return <HiOutlineCheckCircle className={CLASSNAME} size={size} />;
      return <HiCheckCircle className={CLASSNAME} size={size} />;
    case "sort-ascending":
      if (outline)
        return <HiOutlineSortAscending className={CLASSNAME} size={size} />;
      return <HiSortAscending className={CLASSNAME} size={size} />;
    case "sort-descending":
      if (outline)
        return <HiOutlineSortDescending className={CLASSNAME} size={size} />;
      return <HiSortDescending className={CLASSNAME} size={size} />;
    case "code":
      if (outline) return <HiOutlineCode className={CLASSNAME} size={size} />;
      return <HiCode className={CLASSNAME} size={size} />;
    case "expand":
      if (outline) return <HiArrowsExpand className={CLASSNAME} size={size} />;
      return <HiOutlineArrowsExpand className={CLASSNAME} size={size} />;
    case "dots":
      if (outline)
        return <HiOutlineCheckCircle className={CLASSNAME} size={size} />;
      return <HiDotsHorizontal className={CLASSNAME} size={size} />;
    case "dots-fill":
      if (outline)
        return (
          <HiOutlineDotsCircleHorizontal className={CLASSNAME} size={size} />
        );
      return <HiDotsCircleHorizontal className={CLASSNAME} size={size} />;
    case "dots-vertical":
      if (outline)
        return <HiOutlineDotsVertical className={CLASSNAME} size={size} />;
      return <HiDotsVertical className={CLASSNAME} size={size} />;
    case "view":
      if (outline) return <HiOutlineEye className={CLASSNAME} size={size} />;
      return <HiEye className={CLASSNAME} size={size} />;
    case "no-view":
      if (outline) return <HiOutlineEyeOff className={CLASSNAME} size={size} />;
      return <HiEyeOff className={CLASSNAME} size={size} />;
    case "bookmark":
      if (outline) return <BsBookmark className={CLASSNAME} size={size} />;
      return <BsBookmarkFill className={CLASSNAME} size={size} />;
    case "bell":
      if (outline) return <HiOutlineBell className={CLASSNAME} size={size} />;
      return <HiBell className={CLASSNAME} size={size} />;
    case "info":
      if (outline)
        return <HiOutlineInformationCircle className={CLASSNAME} size={size} />;
      return <HiInformationCircle className={CLASSNAME} size={size} />;
    case "question":
      if (outline)
        return (
          <HiOutlineQuestionMarkCircle className={CLASSNAME} size={size} />
        );
      return <HiQuestionMarkCircle className={CLASSNAME} size={size} />;
    case "warning":
      if (outline)
        return <HiOutlineExclamationCircle className={CLASSNAME} size={size} />;
      return <HiExclamationCircle className={CLASSNAME} size={size} />;
    case "warning-triangle":
      if (outline)
        return <HiOutlineExclamation className={CLASSNAME} size={size} />;
      return <HiExclamation className={CLASSNAME} size={size} />;
    case "close":
      if (outline) return <HiX className={CLASSNAME} size={size} />;
      return <HiXCircle className={CLASSNAME} size={size} />;
    case "heart":
      if (outline) return <HiOutlineHeart className={CLASSNAME} size={size} />;
      return <HiHeart className={CLASSNAME} size={size} />;
    case "lock":
      if (outline)
        return <HiOutlineLockClosed className={CLASSNAME} size={size} />;
      return <HiLockClosed className={CLASSNAME} size={size} />;
    case "chevron-right":
      if (outline)
        return <HiOutlineChevronRight className={CLASSNAME} size={size} />;
      return <HiChevronRight className={CLASSNAME} size={size} />;
    case "chevron-left":
      if (outline)
        return <HiOutlineChevronLeft className={CLASSNAME} size={size} />;
      return <HiChevronLeft className={CLASSNAME} size={size} />;
    case "chevron-up":
      if (outline)
        return <HiOutlineChevronUp className={CLASSNAME} size={size} />;
      return <HiChevronUp className={CLASSNAME} size={size} />;
    case "chevron-down":
      if (outline)
        return <HiOutlineChevronDown className={CLASSNAME} size={size} />;
      return <HiChevronDown className={CLASSNAME} size={size} />;
    case "edit":
      if (outline)
        return <HiOutlinePencilAlt className={CLASSNAME} size={size} />;
      return <HiPencilAlt className={CLASSNAME} size={size} />;
    case "pen":
      if (outline) return <HiOutlinePencil className={CLASSNAME} size={size} />;
      return <HiPencil className={CLASSNAME} size={size} />;
    case "book":
      if (outline)
        return <HiOutlineBookOpen className={CLASSNAME} size={size} />;
      return <HiBookOpen className={CLASSNAME} size={size} />;
    case "settings":
      if (outline)
        return <HiOutlineAdjustments className={CLASSNAME} size={size} />;
      return <HiAdjustments className={CLASSNAME} size={size} />;
    case "academy":
      if (outline)
        return <HiOutlineAcademicCap className={CLASSNAME} size={size} />;
      return <HiAcademicCap className={CLASSNAME} size={size} />;
    case "home":
      if (outline) return <HiOutlineHome className={CLASSNAME} size={size} />;
      return <HiHome className={CLASSNAME} size={size} />;
    case "user":
      if (outline) return <HiOutlineUser className={CLASSNAME} size={size} />;
      return <HiUser className={CLASSNAME} size={size} />;
    case "user-fill":
      if (outline)
        return <HiOutlineUserCircle className={CLASSNAME} size={size} />;
      return <HiUserCircle className={CLASSNAME} size={size} />;
    case "save":
      if (outline) return <FaRegSave className={CLASSNAME} size={size} />;
      return <FaSave className={CLASSNAME} size={size} />;
    case "star":
      if (outline) return <HiOutlineStar className={CLASSNAME} size={size} />;
      return <HiStar className={CLASSNAME} size={size} />;
    case "terminal":
      if (outline)
        return <HiOutlineTerminal className={CLASSNAME} size={size} />;
      return <HiTerminal className={CLASSNAME} size={size} />;
    case "mail":
      if (outline) return <HiOutlineMail className={CLASSNAME} size={size} />;
      return <HiMail className={CLASSNAME} size={size} />;
    case "mail-open":
      if (outline)
        return <HiOutlineMailOpen className={CLASSNAME} size={size} />;
      return <HiMailOpen className={CLASSNAME} size={size} />;
    case "send":
      if (outline)
        return <HiOutlinePaperAirplane className={CLASSNAME} size={size} />;
      return <HiPaperAirplane className={CLASSNAME} size={size} />;
    case "map":
      if (outline) return <HiOutlineMap className={CLASSNAME} size={size} />;
      return <HiMap className={CLASSNAME} size={size} />;
    case "location":
      if (outline)
        return <HiOutlineLocationMarker className={CLASSNAME} size={size} />;
      return <HiLocationMarker className={CLASSNAME} size={size} />;
    case "thumbs-up":
      if (outline) return <HiThumbUp className={CLASSNAME} size={size} />;
      return <HiOutlineThumbUp className={CLASSNAME} size={size} />;
    case "thumbs-down":
      if (outline) return <HiThumbDown className={CLASSNAME} size={size} />;
      return <HiOutlineThumbDown className={CLASSNAME} size={size} />;
    case "trash":
      if (outline) return <HiOutlineTrash className={CLASSNAME} size={size} />;
      return <HiTrash className={CLASSNAME} size={size} />;
    case "desktop":
      if (outline)
        return <HiOutlineDesktopComputer className={CLASSNAME} size={size} />;
      return <HiDesktopComputer className={CLASSNAME} size={size} />;
    case "tablet":
      if (outline)
        return <HiOutlineDeviceTablet className={CLASSNAME} size={size} />;
      return <HiDeviceTablet className={CLASSNAME} size={size} />;
    case "mobile":
      if (outline)
        return <HiOutlineDeviceMobile className={CLASSNAME} size={size} />;
      return <HiDeviceMobile className={CLASSNAME} size={size} />;
    case "emoji-sad":
      if (outline)
        return <HiOutlineEmojiSad className={CLASSNAME} size={size} />;
      return <HiEmojiSad className={CLASSNAME} size={size} />;
    case "emoji-happy":
      if (outline)
        return <HiOutlineEmojiHappy className={CLASSNAME} size={size} />;
      return <HiEmojiHappy className={CLASSNAME} size={size} />;
    default:
      return <HiPuzzle />;
  }
}
