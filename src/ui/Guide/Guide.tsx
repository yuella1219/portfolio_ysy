"use client";

import React, { useRef, useState } from "react";
import { Heading, Text, Button, TitleArea, Modal, Popover } from "@ui/index";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverTriggerRef = useRef<HTMLDivElement>(null);
  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button onClick={() => setIsOpen(!isOpen)}>Modal</Button>
        <div ref={popoverTriggerRef} style={{ display: "inline-flex" }}>
          <Button onClick={() => setIsPopoverOpen(true)}>Popover</Button>
          <Button onClick={() => setIsPopoverOpen2(true)}>Popover 2</Button>
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Button
              variant="ghost"
              size="medium"
              onClick={() => setIsOpen(false)}
            >
              close
            </Button>
            <ColorPalette color="link" />
          </Modal>
        )}
        {isPopoverOpen && (
          <Popover
            isOpen={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
            anchorRef={popoverTriggerRef}
          >
            <>
              <Text size="m" color="gray200">
                Popover sample
              </Text>
              <Text size="s" color="gray100">
                스크롤하면 닫힙니다.
              </Text>
            </>
          </Popover>
        )}

        {isPopoverOpen2 && (
          <Popover
            isOpen={isPopoverOpen2}
            onClose={() => setIsPopoverOpen2(false)}
            anchorRef={popoverTriggerRef}
          >
            <>
              <Text size="m" color="gray200">
                Popover sample 22
              </Text>
              <Text size="s" color="gray100">
                스크롤하면 닫힙니다.
              </Text>
            </>
          </Popover>
        )}
      </div>
      <div>
        <Heading size="1">Heading 1</Heading>
        <Heading size="2">Heading 2</Heading>
        <Heading size="3">Heading 3</Heading>
        <Heading size="4">Heading 4</Heading>
        <Heading size="5">Heading 5</Heading>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          marginTop: "24px",
        }}
      >
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
      <div style={{ marginTop: "24px" }}>
        <Button variant="default" size="large">
          Large
        </Button>
        <Button variant="default" size="medium">
          Medium
        </Button>
        <Button variant="default" size="small">
          Small
        </Button>
      </div>
      <div style={{ marginTop: "24px" }}>
        <Text>variant</Text>
        <Button variant="default" size="medium">
          default
        </Button>
        <Button variant="ghost" size="medium">
          ghost
        </Button>
      </div>
      <div style={{ marginTop: "24px" }}>
        <Text>disabled</Text>
        <Button variant="default" size="medium" disabled>
          default
        </Button>
        <Button variant="ghost" size="medium" disabled>
          ghost
        </Button>
      </div>
      <div style={{ marginTop: "24px" }}>
        <TitleArea
          category="Experience"
          title="다양한 환경에서 쌓은 경험"
          description={
            <>
              서비스 목적에 맞는 마크업과 스타일링,인터랙션을
              <br />
              정확하고 유연하게 구현합니다.
            </>
          }
        />
      </div>
    </div>
  );
};
