package com.ssafy.soyu.itemfile;

import com.ssafy.soyu.file.ProfileImage;
import com.ssafy.soyu.item.entity.Item;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "item_file")
@Getter
public class ItemFile {
    @Id
    @GeneratedValue
    @Column(name = "item_file_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Item item;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private ProfileImage ProfileImage;


}
