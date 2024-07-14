import COLORS from '../../Components/Colors';

describe('COLORS', () => {
    test('should have correct color values', () => {
        expect(COLORS.schriftDark).toBe('#2D3142');
        expect(COLORS.schriftMid).toBe('#7D8091');
        expect(COLORS.schriftLight).toBe('#DCDEE4');
        expect(COLORS.primaryDark).toBe('#424874');
        expect(COLORS.primaryMid).toBe('#A1A6CC');
        expect(COLORS.primaryLight).toBe('#D5DFF4');
        expect(COLORS.greenDark).toBe('#2ECC71');
        expect(COLORS.greenMid).toBe('#95E3B6');
        expect(COLORS.greenLight).toBe('#D2F1E0');
        expect(COLORS.redDark).toBe('#DC3545');
        expect(COLORS.redMid).toBe('#EA979F');
        expect(COLORS.redLight).toBe('#F5D7DE');
    });
});
