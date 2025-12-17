import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { buttonStyles, ButtonVariantStyles } from "./Button.style";
import { ButtonCustomeProps } from "./ButtonCustome.type";
import getTextColorFromVariant from "./ButtonCustome.utils";
import { customizeColors } from "@/libs/core/config/theme/color";

const GRADIENT_VARIANTS = ["scan"] as const;

const ButtonCustome = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  variant = "primary",
  style,
  textStyle,
  href,
  disabled,
}: ButtonCustomeProps) => {
  const isGradient = GRADIENT_VARIANTS.includes(variant as any);

  const handlePress = () => {
    if (disabled) return;

    if (href) {
      Linking.openURL(href);
      return;
    }

    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={[
        ButtonVariantStyles.buttonBase,
        !isGradient && ButtonVariantStyles[variant],
        disabled && buttonStyles.disabled,
        style,
      ]}
    >
      {/* ===== GRADIENT LAYER ===== */}
      {isGradient && (
        <LinearGradient
          colors={customizeColors.gradient.scanButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 11 }]}
        />
      )}

      {/* ===== CONTENT ===== */}
      <View style={buttonStyles.content}>
        {leftIcon && <View style={buttonStyles.iconLeft}>{leftIcon}</View>}

        <Text
          style={[
            buttonStyles.textBase,
            getTextColorFromVariant(variant),
            textStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>

        {rightIcon && <View style={buttonStyles.iconRight}>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

export default ButtonCustome;
