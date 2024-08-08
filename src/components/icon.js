import IconAssets from "../assets/icons/iconAssets";

export default function Icon({ iconName, iconSize = 24, ...rest }) {
  const Icon = IconAssets[iconName];

  return <Icon {...rest} width={iconSize} height={iconSize} />;
}
