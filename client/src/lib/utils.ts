import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 获取静态资源的完整路径
 * 在开发环境使用 /，在 GitHub Pages 使用 /meta-lingo-website/
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // 移除路径开头的 /，避免重复
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
