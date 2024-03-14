import streamlit as st
#import tensorflow as tf

def main():
    st.title("Pneumonia Detection")
    # Sử dụng phương thức file_uploader để nhập ảnh
    uploaded_file = st.file_uploader("Chọn ảnh", type=["jpg", "jpeg", "png"])
    
    # Kiểm tra xem người dùng đã chọn ảnh hay chưa
    if uploaded_file is not None:
        # Đọc dữ liệu ảnh từ file người dùng đã tải lên
        image = Image.open(uploaded_file)
        
        # Hiển thị ảnh
        st.image(image, caption='Ảnh đã tải lên', use_column_width=True)

if __name__ == '__main__':
    main()