'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ParallaxImage from './ParallaxImage';

interface AnimatedProseContentProps {
  html: string;
}

interface ParsedBlock {
  type: 'html' | 'image';
  content: string; // html string or image src
  alt?: string;
  className?: string;
}

function parseSectionBlocks(sectionHtml: string): ParsedBlock[] {
  const temp = document.createElement('div');
  temp.innerHTML = sectionHtml;
  const blocks: ParsedBlock[] = [];

  function walk(node: Element) {
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i];
      if (child instanceof HTMLImageElement) {
        blocks.push({
          type: 'image',
          content: child.src,
          alt: child.alt || '',
          className: child.className || '',
        });
      } else if (child instanceof Element) {
        // Check if this element contains an img directly
        const img = child.tagName === 'IMG' ? child as HTMLImageElement : null;
        if (img) {
          blocks.push({
            type: 'image',
            content: img.src,
            alt: img.alt || '',
            className: img.className || '',
          });
        } else {
          // Check for images inside this element
          const innerImgs = child.querySelectorAll('img');
          if (innerImgs.length === 0) {
            blocks.push({ type: 'html', content: child.outerHTML });
          } else {
            // Element has mixed content — render as HTML but extract images
            // Clone without images for the text part
            const clone = child.cloneNode(true) as Element;
            const cloneImgs = clone.querySelectorAll('img');
            cloneImgs.forEach(img => img.remove());
            if (clone.innerHTML.trim()) {
              blocks.push({ type: 'html', content: clone.outerHTML });
            }
            innerImgs.forEach(img => {
              blocks.push({
                type: 'image',
                content: img.src,
                alt: img.alt || '',
                className: img.className || '',
              });
            });
          }
        }
      }
    }
  }

  walk(temp);
  return blocks;
}

export default function AnimatedProseContent({ html }: AnimatedProseContentProps) {
  const [sections, setSections] = useState<{ blocks: ParsedBlock[]; originalHtml: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const wrapper = temp.firstElementChild;
    if (!wrapper) {
      setSections([{ blocks: [{ type: 'html', content: html }], originalHtml: html }]);
      return;
    }
    const result: { blocks: ParsedBlock[]; originalHtml: string }[] = [];
    for (let i = 0; i < wrapper.children.length; i++) {
      const child = wrapper.children[i];
      const blocks = parseSectionBlocks(child.outerHTML);
      result.push({ blocks, originalHtml: child.outerHTML });
    }
    setSections(result.length > 0 ? result : [{ blocks: [{ type: 'html', content: html }], originalHtml: html }]);
  }, [html]);

  // SSR fallback
  if (!mounted) {
    return (
      <div className="prose-custom">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

  return (
    <div className="prose-custom">
      <div className="space-y-16">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {section.blocks.map((block, j) =>
              block.type === 'image' ? (
                <ParallaxImage
                  key={j}
                  src={block.content}
                  alt={block.alt || ''}
                  className={`inline-img mt-8 ${block.className?.includes('h-96') ? 'h-96' : block.className?.includes('h-80') ? 'h-80' : 'h-80'}`}
                />
              ) : (
                <div key={j} dangerouslySetInnerHTML={{ __html: block.content }} />
              )
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
