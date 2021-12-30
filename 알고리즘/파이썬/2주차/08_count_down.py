def count_down(number):
    if number < 0: #탈출조건 반드시 필요!!
        return
    print(number)
    count_down(number - 1)


count_down(60)