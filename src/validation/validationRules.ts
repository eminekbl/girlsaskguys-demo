import {defineRule} from 'vee-validate';

// Required Rule
defineRule('required', (value: string): boolean | string => {
    if (!value || !value.trim()) {
        return 'This field is required.';
    }
    return true;
});

// Date Rule
defineRule('valid_date', (value: string): boolean | string => {
    if (!value) {
        return 'Please select a date.';
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
        return 'Please select a valid date.';
    }

    return true;
});

// After Start Date Rule
defineRule('after_start_date', (value: string, [target]: [string]): boolean | string => {
    if (!value || !target) {
        return 'Both start date and end date are required.';
    }

    const startDate = new Date(target);
    const endDate = new Date(value);

    if (endDate <= startDate) {
        return 'End date must be later than start date.';
    }

    return true;
});
