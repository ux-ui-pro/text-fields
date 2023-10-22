function getNotchWidth(notch) {
  const label = notch.querySelector('.floating-label');
  return label ? `${(parseFloat(getComputedStyle(label).width) + 13) * 0.75}px` : 'auto';
}

export default getNotchWidth;
