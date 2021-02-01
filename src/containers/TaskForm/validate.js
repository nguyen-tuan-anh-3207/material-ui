const validate = (values) => {
    const err = {};
    const {title, description} = values;
    if (!title) {
        err.title = 'Vui lòng nhập tiêu đề';
    } else if (title.trim() && title.length <5){
        err.title = 'Tiêu đề phải từ 5 kí tự';
    };

    return err;
};

export default validate;