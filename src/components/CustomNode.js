// src/components/CustomNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import './CustomNode.css';
import CustomNode from './CustomNode';

const nodeTypes = { chatNode: ChatNode, customNode: CustomNode };


const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <div className="custom-node-content">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default CustomNode;
