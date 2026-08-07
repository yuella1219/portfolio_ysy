import React from "react";
import { Heading, Text } from "@components/index";

const ColorPalette = ({ color }: { color: string }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: `var(--color-${color})`,
          width: "100px",
          height: "100px",
        }}
      />
      <span style={{ color: `var(--color-gray-200)` }}>{color}</span>
    </div>
  );
};

export const Guide = () => {
  return (
    <div>
      <div>
        <Heading size="1">Heading 1</Heading>
        <Heading size="2">Heading 2</Heading>
        <Heading size="3">Heading 3</Heading>
        <Heading size="4">Heading 4</Heading>
        <Heading size="5">Heading 5</Heading>
      </div>
      <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
        <ColorPalette color="background" />
        <ColorPalette color="black" />
        <ColorPalette color="gray-100" />
        <ColorPalette color="gray-200" />
        <ColorPalette color="white" />
        <ColorPalette color="link" />
      </div>
      <div style={{ marginTop: "24px" }}>
        <Text size="xxl" color="gray200">
          Text xxl
        </Text>
        <Text size="xl" color="gray200">
          Text xl
        </Text>
        <Text size="l" color="gray200">
          Text l
        </Text>
        <Text size="m" color="gray200">
          Text m
        </Text>
        <Text size="s" color="gray200">
          Text s
        </Text>
      </div>
    </div>
  );
};
