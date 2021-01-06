/** 异常时在控制台输出错误信息
 * @param message 错误信息.
 */
export default function warning(message: string): void {
  if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(message)
  try {
    throw new Error(message) // 该行会导致程序执行中断.
  } catch (e) {} // eslint-disable-line no-empty
}
