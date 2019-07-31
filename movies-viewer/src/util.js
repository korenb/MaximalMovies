
const takeParamBreakpoints = {
    0: 20,
    720: 40,
    1400: 60
};

/**
 * Рассчитать параметр, определяющий количество загружаемых элементов
 */
export function calcTakeParameter() {
    const browserWidth = window.innerWidth;
    let breakpointKeys = Object.keys(takeParamBreakpoints);

    let breakpoint = breakpointKeys
        .reverse()
        .find(v => v < browserWidth);

    if (breakpoint < 0)
        breakpoint = breakpointKeys[breakpointKeys.length - 1];

    return takeParamBreakpoints[breakpoint];
}