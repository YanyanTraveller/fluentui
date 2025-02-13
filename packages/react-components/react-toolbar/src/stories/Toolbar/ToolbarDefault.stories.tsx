import * as React from 'react';
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderline24Regular,
  AlertSnooze24Regular,
  MoreHorizontal24Filled,
} from '@fluentui/react-icons';
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import { Toolbar, ToolbarButton, ToolbarDivider, ToolbarToggleButton } from '@fluentui/react-toolbar';
import type { ToolbarProps } from '@fluentui/react-toolbar';

export const Default = (props: Partial<ToolbarProps>) => (
  <Toolbar {...props}>
    <ToolbarButton aria-label="Text option - Bold" appearance="primary" icon={<TextBold24Regular />} />
    <ToolbarButton aria-label="Text option - Italic" icon={<TextItalic24Regular />} />
    <ToolbarButton aria-label="Text option - Underline" icon={<TextUnderline24Regular />} />
    <ToolbarDivider />
    <ToolbarToggleButton
      aria-label="Snooze Alert Option"
      name="toggle"
      value="toggle"
      icon={<AlertSnooze24Regular />}
    />
    <Menu>
      <MenuTrigger>
        <ToolbarButton aria-label="More menu" icon={<MoreHorizontal24Filled />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </Toolbar>
);
