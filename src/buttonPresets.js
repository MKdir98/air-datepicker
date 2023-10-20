import JalaliDate from './jalaliDate'

export default {
    today: {
        content: dp => dp.locale.today,
        onClick: dp => dp.setViewDate(new JalaliDate()),
    },
    clear: {
        content: dp => dp.locale.clear,
        onClick: dp => dp.clear()
    }
};
