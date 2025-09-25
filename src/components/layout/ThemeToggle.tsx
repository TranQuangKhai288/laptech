"use client";

import React from "react";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  DesktopOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useTheme } from "@/components/providers/ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const items: MenuProps["items"] = [
    {
      key: "light",
      label: (
        <Space>
          <SunOutlined />
          Sáng
        </Space>
      ),
      onClick: () => setTheme("light"),
    },
    {
      key: "dark",
      label: (
        <Space>
          <MoonOutlined />
          Tối
        </Space>
      ),
      onClick: () => setTheme("dark"),
    },
    {
      key: "system",
      label: (
        <Space>
          <DesktopOutlined />
          Theo hệ thống
        </Space>
      ),
      onClick: () => setTheme("system"),
    },
  ];

  const getIcon = () => {
    if (theme === "system") {
      return resolvedTheme === "dark" ? (
        <MoonOutlined style={{ fontSize: 22 }} />
      ) : (
        <SunOutlined style={{ fontSize: 22 }} />
      );
    }
    return theme === "dark" ? (
      <MoonOutlined style={{ fontSize: 22 }} />
    ) : (
      <SunOutlined style={{ fontSize: 22 }} />
    );
  };

  const getTooltip = () => {
    switch (theme) {
      case "light":
        return "Chế độ sáng";
      case "dark":
        return "Chế độ tối";
      case "system":
        return `Theo hệ thống (${resolvedTheme === "dark" ? "tối" : "sáng"})`;
      default:
        return "Chế độ giao diện";
    }
  };

  return (
    <Dropdown
      menu={{ items, selectedKeys: [theme] }}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Button
        type="text"
        icon={getIcon()}
        title={getTooltip()}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
        }}
      />
    </Dropdown>
  );
};

export default ThemeToggle;
